import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Eye, FileText, FolderKanban, Inbox, LogOut, Pencil, Plus, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';
import {
  login,
  logout,
  getAdminToken,
  clearAdminToken,
  listBlogs,
  listCategories,
  createBlog,
  updateBlog,
  deleteBlog,
  createCategory,
  updateCategory,
  deleteCategory,
  listInquiries,
  updateInquiry,
  deleteInquiry
} from '@/api/adminApi.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import RichTextEditor from '@/components/ui/rich-text-editor.jsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const logoSrc = '/logo.jpeg';

const emptyBlogForm = {
  id: null,
  blog_title: '',
  slug: '',
  slug_touched: false,
  short_description: '',
  content: '',
  read_time: '',
  blog_category_id: '',
  blog_image: null,
  blog_image_url: '',
  existing_image: '',
  image_alt_text: '',
  is_featured: false,
  status: 'published',
  meta_title: '',
  meta_description: '',
  target_keyword: '',
  secondary_keywords: ''
};

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const inquiryTypeLabels = {
  contact: 'Contact',
  newsletter: 'Newsletter',
  get_started: 'Get Started'
};

const navItems = [
  { key: 'blogs', label: 'Blogs', icon: FileText },
  { key: 'categories', label: 'Categories', icon: FolderKanban },
  { key: 'inquiries', label: 'Inquiries', icon: Inbox }
];

const AdminLogin = ({ onSuccess, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      toast.error('Please enter your email and password.');
      return;
    }

    setIsSubmitting(true);

    try {
      const user = await login(email.trim(), password);
      onSuccess(user);
    } catch (error) {
      clearAdminToken();
      toast.error(error.message || 'We could not sign you in right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fbfffd] px-5 text-[#102f28]">
      <div className="w-full max-w-md rounded-3xl border border-[#dbece5] bg-white p-8 shadow-[0_18px_60px_rgba(15,61,50,0.08)]">
        <Link to="/" aria-label="Back to NeuroDigital Support home">
          <img src={logoSrc} alt="NeuroDigital Support" className="h-10 w-auto object-contain" />
        </Link>
        <h1 className="mt-6 text-2xl font-semibold leading-tight tracking-normal text-[#0b3b31]">Admin Sign In</h1>
        <p className="mt-3 text-sm font-medium leading-6 text-[#536b64]">
          Sign in with your admin account to manage blogs, categories, and inquiries.
        </p>

        {errorMessage ? (
          <div className="mt-5 rounded-2xl border border-[#f1d5d5] bg-[#fff8f8] p-4 text-sm font-semibold text-[#8a2f2f]">
            {errorMessage}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="admin-email">Email</Label>
            <Input
              id="admin-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="h-12 rounded-xl border-[#d2e7df] bg-white px-4 text-sm font-medium shadow-none"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="admin-password">Password</Label>
            <Input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="h-12 rounded-xl border-[#d2e7df] bg-white px-4 text-sm font-medium shadow-none"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 rounded-xl bg-[#087653] text-sm font-semibold text-white shadow-[0_14px_34px_rgba(8,118,83,0.24)] hover:bg-[#075f45]"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </main>
  );
};

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(getAdminToken()));
  const [loginError, setLoginError] = useState('');
  const [activeSection, setActiveSection] = useState('blogs');

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  const [blogDialogOpen, setBlogDialogOpen] = useState(false);
  const [blogForm, setBlogForm] = useState(emptyBlogForm);
  const [isSavingBlog, setIsSavingBlog] = useState(false);

  const [newCategoryName, setNewCategoryName] = useState('');
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editingCategoryName, setEditingCategoryName] = useState('');
  const [isSavingCategory, setIsSavingCategory] = useState(false);

  const [inquiryDialogOpen, setInquiryDialogOpen] = useState(false);
  const [activeInquiry, setActiveInquiry] = useState(null);
  const [inquiryNote, setInquiryNote] = useState('');
  const [isSavingInquiry, setIsSavingInquiry] = useState(false);

  const handleUnauthorized = (error, fallbackMessage) => {
    if (error?.status === 401) {
      clearAdminToken();
      setIsAuthenticated(false);
      setLoginError('Your session has expired. Please sign in again.');
      return true;
    }

    toast.error(error?.message || fallbackMessage);
    return false;
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      // ignore logout errors, clear client state regardless
    } finally {
      setIsAuthenticated(false);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    setLoadError('');

    try {
      const [blogsData, categoriesData, inquiriesData] = await Promise.all([
        listBlogs(),
        listCategories(),
        listInquiries()
      ]);
      setBlogs(blogsData);
      setCategories(categoriesData);
      setInquiries(inquiriesData);
    } catch (error) {
      setLoadError(error.message || 'We could not load data right now. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <AdminLogin
        onSuccess={() => {
          setLoginError('');
          setIsAuthenticated(true);
        }}
        errorMessage={loginError}
      />
    );
  }

  const openCreateBlogDialog = () => {
    setBlogForm(emptyBlogForm);
    setBlogDialogOpen(true);
  };

  const openEditBlogDialog = (blog) => {
    setBlogForm({
      id: blog.id,
      blog_title: blog.title || '',
      slug: blog.slug || '',
      slug_touched: true,
      short_description: blog.short_description || '',
      content: blog.content || '',
      read_time: blog.Time || '',
      blog_category_id: blog.blog_category_id ? String(blog.blog_category_id) : '',
      blog_image: null,
      blog_image_url: '',
      existing_image: blog.image || '',
      image_alt_text: blog.image_alt_text || '',
      is_featured: Boolean(blog.is_featured),
      status: blog.status || 'published',
      meta_title: blog.meta_title || '',
      meta_description: blog.meta_description || '',
      target_keyword: blog.target_keyword || '',
      secondary_keywords: blog.secondary_keywords || ''
    });
    setBlogDialogOpen(true);
  };

  const handleBlogFieldChange = (field) => (event) => {
    const value = event?.target?.value ?? '';
    setBlogForm((current) => ({ ...current, [field]: value }));
  };

  const handleBlogTitleChange = (event) => {
    const value = event.target.value;
    setBlogForm((current) => ({
      ...current,
      blog_title: value,
      slug: current.slug_touched ? current.slug : slugify(value)
    }));
  };

  const handleBlogSlugChange = (event) => {
    const value = event.target.value;
    setBlogForm((current) => ({ ...current, slug: slugify(value), slug_touched: true }));
  };

  const handleBlogImageChange = (event) => {
    const file = event.target.files?.[0] || null;
    setBlogForm((current) => ({ ...current, blog_image: file }));
  };

  const blogImagePreview = useMemo(() => {
    if (blogForm.blog_image) {
      return URL.createObjectURL(blogForm.blog_image);
    }
    if (blogForm.blog_image_url.trim()) {
      return blogForm.blog_image_url.trim();
    }
    return blogForm.existing_image || '';
  }, [blogForm.blog_image, blogForm.blog_image_url, blogForm.existing_image]);

  useEffect(() => {
    return () => {
      if (blogForm.blog_image && blogImagePreview) {
        URL.revokeObjectURL(blogImagePreview);
      }
    };
  }, [blogImagePreview, blogForm.blog_image]);

  const handleBlogSubmit = async (event) => {
    event.preventDefault();

    if (!blogForm.blog_title.trim()) {
      toast.error('Please enter a blog title.');
      return;
    }

    if (!blogForm.blog_category_id) {
      toast.error('Please select a category.');
      return;
    }

    setIsSavingBlog(true);

    try {
      const formData = new FormData();
      formData.append('blog_title', blogForm.blog_title);
      formData.append('slug', blogForm.slug ? slugify(blogForm.slug) : '');
      formData.append('short_description', blogForm.short_description || '');
      formData.append('content', blogForm.content || '');
      formData.append('read_time', blogForm.read_time || '');
      formData.append('blog_category_id', blogForm.blog_category_id);
      formData.append('is_featured', blogForm.is_featured ? '1' : '0');
      formData.append('meta_title', blogForm.meta_title || '');
      formData.append('meta_description', blogForm.meta_description || '');
      formData.append('target_keyword', blogForm.target_keyword || '');
      formData.append('secondary_keywords', blogForm.secondary_keywords || '');
      formData.append('image_alt_text', blogForm.image_alt_text || '');
      formData.append('status', blogForm.status || 'published');

      if (blogForm.blog_image) {
        formData.append('blog_image', blogForm.blog_image);
      } else if (blogForm.blog_image_url.trim()) {
        formData.append('blog_image_url', blogForm.blog_image_url.trim());
      }

      if (blogForm.id) {
        await updateBlog(blogForm.id, formData);
        toast.success('Blog updated successfully.');
      } else {
        await createBlog(formData);
        toast.success('Blog created successfully.');
      }

      setBlogDialogOpen(false);
      setBlogForm(emptyBlogForm);
      await loadData();
    } catch (error) {
      handleUnauthorized(error, 'We could not save the blog right now.');
    } finally {
      setIsSavingBlog(false);
    }
  };

  const handleDeleteBlog = async (blog) => {
    if (!window.confirm(`Delete blog "${blog.title}"? This cannot be undone.`)) {
      return;
    }

    try {
      await deleteBlog(blog.id);
      toast.success('Blog deleted successfully.');
      await loadData();
    } catch (error) {
      handleUnauthorized(error, 'We could not delete the blog right now.');
    }
  };

  const handleAddCategory = async (event) => {
    event.preventDefault();

    if (!newCategoryName.trim()) {
      toast.error('Please enter a category name.');
      return;
    }

    setIsSavingCategory(true);

    try {
      await createCategory(newCategoryName.trim());
      toast.success('Category added successfully.');
      setNewCategoryName('');
      await loadData();
    } catch (error) {
      handleUnauthorized(error, 'We could not add the category right now.');
    } finally {
      setIsSavingCategory(false);
    }
  };

  const startEditCategory = (category) => {
    setEditingCategoryId(category.id);
    setEditingCategoryName(category.name);
  };

  const cancelEditCategory = () => {
    setEditingCategoryId(null);
    setEditingCategoryName('');
  };

  const saveEditCategory = async (category) => {
    if (!editingCategoryName.trim()) {
      toast.error('Please enter a category name.');
      return;
    }

    setIsSavingCategory(true);

    try {
      await updateCategory(category.id, editingCategoryName.trim());
      toast.success('Category updated successfully.');
      cancelEditCategory();
      await loadData();
    } catch (error) {
      handleUnauthorized(error, 'We could not update the category right now.');
    } finally {
      setIsSavingCategory(false);
    }
  };

  const handleDeleteCategory = async (category) => {
    if (!window.confirm(`Delete category "${category.name}"? This cannot be undone.`)) {
      return;
    }

    try {
      await deleteCategory(category.id);
      toast.success('Category deleted successfully.');
      await loadData();
    } catch (error) {
      handleUnauthorized(error, 'We could not delete the category right now.');
    }
  };

  const openInquiryDialog = (inquiry) => {
    setActiveInquiry(inquiry);
    setInquiryNote(inquiry.admin_note || '');
    setInquiryDialogOpen(true);
  };

  const handleSaveInquiry = async (status) => {
    if (!activeInquiry) {
      return;
    }

    setIsSavingInquiry(true);

    try {
      await updateInquiry(activeInquiry.id, { status, admin_note: inquiryNote });
      toast.success('Inquiry updated successfully.');
      setInquiryDialogOpen(false);
      setActiveInquiry(null);
      await loadData();
    } catch (error) {
      handleUnauthorized(error, 'We could not update this inquiry right now.');
    } finally {
      setIsSavingInquiry(false);
    }
  };

  const handleDeleteInquiry = async (inquiry) => {
    if (!window.confirm('Delete this inquiry? This cannot be undone.')) {
      return;
    }

    try {
      await deleteInquiry(inquiry.id);
      toast.success('Inquiry deleted successfully.');
      await loadData();
    } catch (error) {
      handleUnauthorized(error, 'We could not delete this inquiry right now.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | NeuroDigital Support</title>
      </Helmet>

      <div className="flex min-h-screen bg-[#fbfffd] text-[#102f28]">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-[#dcece6] bg-white px-5 py-8 sm:flex">
          <Link to="/" aria-label="Back to NeuroDigital Support home">
            <img src={logoSrc} alt="NeuroDigital Support" className="h-9 w-auto object-contain" />
          </Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#7a8f88]">Dashboard</p>

          <nav className="mt-4 flex flex-1 flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.key;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveSection(item.key)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition duration-200 ${
                    isActive
                      ? 'bg-[#0b5f49] text-white shadow-[0_10px_28px_rgba(11,95,73,0.2)]'
                      : 'text-[#31544c] hover:bg-[#edf8f3]'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                  {item.key === 'inquiries' && inquiries.some((inquiry) => inquiry.status !== 'replied') ? (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f0a44b] px-1 text-[0.65rem] font-bold text-white">
                      {inquiries.filter((inquiry) => inquiry.status !== 'replied').length}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </nav>

          <Button variant="outline" size="sm" onClick={handleLogout} className="mt-6 justify-center gap-2">
            <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
            Sign Out
          </Button>
        </aside>

        <main className="flex-1 px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-[1000px] items-center justify-between gap-4 sm:hidden">
            <Link to="/" aria-label="Back to NeuroDigital Support home">
              <img src={logoSrc} alt="NeuroDigital Support" className="h-8 w-auto object-contain" />
            </Link>
            <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
              <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
              Sign Out
            </Button>
          </div>

          <div className="mx-auto mt-4 max-w-[1000px] sm:mt-0">
            <div className="flex gap-2 overflow-x-auto pb-1 sm:hidden">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveSection(item.key)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
                    activeSection === item.key ? 'bg-[#0b5f49] text-white' : 'bg-white text-[#31544c] border border-[#dcece6]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {isLoading ? (
              <div className="mt-6 rounded-2xl border border-[#dcece6] bg-white p-8 text-center">
                <p className="text-base font-semibold text-[#31544c]">Loading...</p>
              </div>
            ) : loadError ? (
              <div className="mt-6 rounded-2xl border border-[#f1d5d5] bg-[#fff8f8] p-8 text-center">
                <p className="text-base font-semibold text-[#8a2f2f]">{loadError}</p>
              </div>
            ) : (
              <>
                {activeSection === 'blogs' ? (
                  <section className="mt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold text-[#0b3b31]">Blogs</h1>
                        <p className="mt-1 text-sm font-medium text-[#536b64]">Create and manage blog articles.</p>
                      </div>
                      <Button onClick={openCreateBlogDialog} className="gap-2">
                        <Plus className="h-4 w-4" aria-hidden="true" />
                        Add New Blog
                      </Button>
                    </div>

                    <div className="mt-5 overflow-hidden rounded-2xl border border-[#dcece6] bg-white">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="w-[280px] text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {blogs.length === 0 ? (
                            <TableRow>
                              <TableCell colSpan={4} className="text-center text-sm font-medium text-[#536b64]">
                                No blogs yet.
                              </TableCell>
                            </TableRow>
                          ) : (
                            blogs.map((blog) => (
                              <TableRow key={blog.id}>
                                <TableCell className="font-medium">{blog.title}</TableCell>
                                <TableCell>{blog.category}</TableCell>
                                <TableCell>{blog.date}</TableCell>
                                <TableCell className="text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button variant="outline" size="sm" asChild>
                                      <a href={`/blogs/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                                        <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                                        Preview
                                      </a>
                                    </Button>
                                    <Button variant="outline" size="sm" onClick={() => openEditBlogDialog(blog)}>
                                      <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                                      Edit
                                    </Button>
                                    <Button variant="destructive" size="sm" onClick={() => handleDeleteBlog(blog)}>
                                      <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                                      Delete
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </section>
                ) : null}

                {activeSection === 'categories' ? (
                  <section className="mt-6">
                    <h1 className="text-2xl font-semibold text-[#0b3b31]">Categories</h1>
                    <p className="mt-1 text-sm font-medium text-[#536b64]">Organize blog articles by topic.</p>

                    <form onSubmit={handleAddCategory} className="mt-5 flex gap-2">
                      <Input
                        value={newCategoryName}
                        onChange={(event) => setNewCategoryName(event.target.value)}
                        placeholder="New category name"
                        className="h-10 max-w-xs"
                      />
                      <Button type="submit" disabled={isSavingCategory} className="gap-2">
                        <Plus className="h-4 w-4" aria-hidden="true" />
                        Add
                      </Button>
                    </form>

                    <div className="mt-5 divide-y divide-[#dcece6] rounded-2xl border border-[#dcece6] bg-white">
                      {categories.length === 0 ? (
                        <p className="p-4 text-sm font-medium text-[#536b64]">No categories yet.</p>
                      ) : (
                        categories.map((category) => (
                          <div key={category.id} className="flex items-center justify-between gap-3 p-4">
                            {editingCategoryId === category.id ? (
                              <Input
                                value={editingCategoryName}
                                onChange={(event) => setEditingCategoryName(event.target.value)}
                                className="h-9 max-w-xs"
                              />
                            ) : (
                              <span className="text-sm font-semibold text-[#102f28]">{category.name}</span>
                            )}

                            <div className="flex gap-2">
                              {editingCategoryId === category.id ? (
                                <>
                                  <Button size="sm" disabled={isSavingCategory} onClick={() => saveEditCategory(category)}>
                                    Save
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={cancelEditCategory}>
                                    Cancel
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <Button size="sm" variant="outline" onClick={() => startEditCategory(category)}>
                                    <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                                    Edit
                                  </Button>
                                  <Button size="sm" variant="destructive" onClick={() => handleDeleteCategory(category)}>
                                    <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                                    Delete
                                  </Button>
                                </>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </section>
                ) : null}

                {activeSection === 'inquiries' ? (
                  <section className="mt-6">
                    <h1 className="text-2xl font-semibold text-[#0b3b31]">Inquiries</h1>
                    <p className="mt-1 text-sm font-medium text-[#536b64]">
                      Submissions from the contact form, newsletter signups, and get started requests.
                    </p>

                    <div className="mt-5 overflow-hidden rounded-2xl border border-[#dcece6] bg-white">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Type</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Received</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {inquiries.length === 0 ? (
                            <TableRow>
                              <TableCell colSpan={6} className="text-center text-sm font-medium text-[#536b64]">
                                No inquiries yet.
                              </TableCell>
                            </TableRow>
                          ) : (
                            inquiries.map((inquiry) => (
                              <TableRow key={inquiry.id}>
                                <TableCell>{inquiryTypeLabels[inquiry.type] || inquiry.type}</TableCell>
                                <TableCell className="font-medium">{inquiry.name || '—'}</TableCell>
                                <TableCell>{inquiry.email || '—'}</TableCell>
                                <TableCell>
                                  <span
                                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                                      inquiry.status === 'replied'
                                        ? 'bg-[#e8f7f1] text-[#0f765a]'
                                        : 'bg-[#fdf1e0] text-[#a5661b]'
                                    }`}
                                  >
                                    {inquiry.status === 'replied' ? 'Replied' : 'New'}
                                  </span>
                                </TableCell>
                                <TableCell>{new Date(inquiry.created_at).toLocaleDateString()}</TableCell>
                                <TableCell className="text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button variant="outline" size="sm" onClick={() => openInquiryDialog(inquiry)}>
                                      View
                                    </Button>
                                    <Button variant="destructive" size="sm" onClick={() => handleDeleteInquiry(inquiry)}>
                                      <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </section>
                ) : null}
              </>
            )}
          </div>
        </main>
      </div>

      <Dialog open={blogDialogOpen} onOpenChange={setBlogDialogOpen}>
        <DialogContent className="max-h-[90vh] w-[95vw] max-w-6xl overflow-visible p-0 [&>button]:hidden">
          <span
            role="button"
            tabIndex={0}
            onClick={() => setBlogDialogOpen(false)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setBlogDialogOpen(false);
              }
            }}
            aria-label="Close"
            className="absolute -right-12 top-1 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#dcece6] bg-white text-[#31544c] shadow-[0_10px_28px_rgba(15,61,50,0.18)] transition-colors hover:bg-[#f1faf6]"
          >
            <X className="h-4 w-4" />
          </span>

          <div className="max-h-[90vh] overflow-y-auto rounded-lg bg-background">
          <DialogHeader className="sticky top-0 z-10 flex-row items-center justify-between gap-4 border-b border-[#dcece6] bg-background px-6 py-4">
            <DialogTitle>{blogForm.id ? 'Edit Blog' : 'Add New Blog'}</DialogTitle>
            <div className="flex gap-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setBlogDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" form="blog-form" size="sm" disabled={isSavingBlog}>
                {isSavingBlog ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </DialogHeader>

          <form id="blog-form" onSubmit={handleBlogSubmit} className="grid gap-6 p-6 lg:grid-cols-[1fr_320px]">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="blog_title">Title</Label>
                <Input
                  id="blog_title"
                  value={blogForm.blog_title}
                  onChange={handleBlogTitleChange}
                  placeholder="Blog title"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="slug">URL Slug</Label>
                <div className="flex items-center overflow-hidden rounded-md border border-input">
                  <span className="whitespace-nowrap bg-[#f1faf6] px-3 py-2 text-sm font-medium text-[#536b64]">
                    /blogs/
                  </span>
                  <Input
                    id="slug"
                    value={blogForm.slug}
                    onChange={handleBlogSlugChange}
                    placeholder="what-is-neuro-digital"
                    className="rounded-none border-0 shadow-none focus-visible:ring-0"
                  />
                </div>
                <p className="text-xs text-[#7a8f88]">Auto-generated from the title — edit to customize.</p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="short_description">Short Description</Label>
                <Textarea
                  id="short_description"
                  value={blogForm.short_description}
                  onChange={handleBlogFieldChange('short_description')}
                  placeholder="Short description"
                  className="min-h-20"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="content">Content</Label>
                <RichTextEditor
                  value={blogForm.content}
                  onChange={(html) => setBlogForm((current) => ({ ...current, content: html }))}
                  placeholder="Write your blog content..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="read_time">Read Time (minutes)</Label>
                  <Input
                    id="read_time"
                    type="number"
                    min="0"
                    value={blogForm.read_time}
                    onChange={handleBlogFieldChange('read_time')}
                    placeholder="e.g. 5"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="blog_category_id">Category</Label>
                  <Select
                    value={blogForm.blog_category_id}
                    onValueChange={(value) => setBlogForm((current) => ({ ...current, blog_category_id: value }))}
                  >
                    <SelectTrigger id="blog_category_id">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={String(category.id)}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-xl border border-[#dcece6] bg-[#fbfffd] p-4">
                <p className="text-sm font-bold text-[#0b3b31]">SEO Settings</p>
                <p className="mt-1 text-xs text-[#7a8f88]">Optional — helps this post rank for a specific search term.</p>

                <div className="mt-4 grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="target_keyword">Target Keyword</Label>
                    <Input
                      id="target_keyword"
                      value={blogForm.target_keyword}
                      onChange={handleBlogFieldChange('target_keyword')}
                      placeholder="e.g. neuro digital wellbeing"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="secondary_keywords">Secondary Keywords</Label>
                    <Textarea
                      id="secondary_keywords"
                      value={blogForm.secondary_keywords}
                      onChange={handleBlogFieldChange('secondary_keywords')}
                      placeholder="e.g. what is neuro digital, neuro digital support, neurodivergent digital wellbeing meaning"
                      className="min-h-16"
                    />
                    <p className="text-xs text-[#7a8f88]">Comma-separated related search terms.</p>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="meta_title">Meta Title</Label>
                    <Input
                      id="meta_title"
                      value={blogForm.meta_title}
                      onChange={handleBlogFieldChange('meta_title')}
                      placeholder="Title shown in Google search results"
                    />
                    <p className="text-xs text-[#7a8f88]">{blogForm.meta_title.length}/60 characters (recommended)</p>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="meta_description">Meta Description</Label>
                    <Textarea
                      id="meta_description"
                      value={blogForm.meta_description}
                      onChange={handleBlogFieldChange('meta_description')}
                      placeholder="Short summary shown under the title in search results"
                      className="min-h-20"
                    />
                    <p className="text-xs text-[#7a8f88]">{blogForm.meta_description.length}/160 characters (recommended)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid content-start gap-4">
              <div className="rounded-xl border border-[#dcece6] bg-[#fbfffd] p-4">
                <p className="text-sm font-bold text-[#0b3b31]">Publishing</p>

                <div className="mt-3 grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={blogForm.status}
                    onValueChange={(value) => setBlogForm((current) => ({ ...current, status: value }))}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <Checkbox
                    id="is_featured"
                    checked={blogForm.is_featured}
                    onCheckedChange={(checked) => setBlogForm((current) => ({ ...current, is_featured: checked === true }))}
                  />
                  <Label htmlFor="is_featured" className="cursor-pointer font-normal">
                    Set as Featured
                  </Label>
                </div>
              </div>

              <div className="rounded-xl border border-[#dcece6] bg-[#fbfffd] p-4">
                <p className="text-sm font-bold text-[#0b3b31]">Featured Image</p>

                {blogImagePreview ? (
                  <img
                    src={blogImagePreview}
                    alt="Featured preview"
                    className="mt-3 h-32 w-full rounded-lg border border-[#dcece6] object-cover"
                  />
                ) : null}

                <div className="mt-3 grid gap-2">
                  <Label htmlFor="blog_image" className="text-xs font-semibold text-[#536b64]">
                    Upload / replace image
                  </Label>
                  <Input
                    id="blog_image"
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleBlogImageChange}
                  />
                </div>

                <div className="mt-3 grid gap-2">
                  <Label htmlFor="blog_image_url" className="text-xs font-semibold text-[#536b64]">
                    Image URL
                  </Label>
                  <Input
                    id="blog_image_url"
                    type="url"
                    value={blogForm.blog_image_url}
                    onChange={handleBlogFieldChange('blog_image_url')}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="mt-3 grid gap-2">
                  <Label htmlFor="image_alt_text" className="text-xs font-semibold text-[#536b64]">
                    Image alt text
                  </Label>
                  <Textarea
                    id="image_alt_text"
                    value={blogForm.image_alt_text}
                    onChange={handleBlogFieldChange('image_alt_text')}
                    placeholder="Describe this image for SEO and accessibility."
                    className="min-h-16"
                  />
                </div>
              </div>
            </div>
          </form>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={inquiryDialogOpen} onOpenChange={setInquiryDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Inquiry Details</DialogTitle>
          </DialogHeader>

          {activeInquiry ? (
            <div className="grid gap-4">
              <div className="grid gap-1">
                <span className="text-xs font-bold uppercase tracking-wide text-[#7a8f88]">Type</span>
                <span className="text-sm font-semibold text-[#102f28]">
                  {inquiryTypeLabels[activeInquiry.type] || activeInquiry.type}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7a8f88]">Name</span>
                  <span className="text-sm font-semibold text-[#102f28]">{activeInquiry.name || '—'}</span>
                </div>
                <div className="grid gap-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7a8f88]">Email</span>
                  <span className="text-sm font-semibold text-[#102f28]">{activeInquiry.email || '—'}</span>
                </div>
              </div>
              {activeInquiry.subject ? (
                <div className="grid gap-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7a8f88]">Subject</span>
                  <span className="text-sm font-semibold text-[#102f28]">{activeInquiry.subject}</span>
                </div>
              ) : null}
              {activeInquiry.message ? (
                <div className="grid gap-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7a8f88]">Message</span>
                  <p className="whitespace-pre-line text-sm font-medium text-[#31544c]">{activeInquiry.message}</p>
                </div>
              ) : null}
              {activeInquiry.response_method === 'phone' && activeInquiry.phone_number ? (
                <div className="grid gap-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7a8f88]">Phone</span>
                  <span className="text-sm font-semibold text-[#102f28]">{activeInquiry.phone_number}</span>
                </div>
              ) : null}

              <div className="grid gap-2">
                <Label htmlFor="admin_note">Internal Note</Label>
                <Textarea
                  id="admin_note"
                  value={inquiryNote}
                  onChange={(event) => setInquiryNote(event.target.value)}
                  placeholder="What did you reply, or what needs follow-up?"
                  className="min-h-24"
                />
              </div>

              <DialogFooter className="gap-2 sm:justify-between">
                <Button type="button" variant="outline" onClick={() => setInquiryDialogOpen(false)}>
                  Close
                </Button>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" disabled={isSavingInquiry} onClick={() => handleSaveInquiry('new')}>
                    Save as New
                  </Button>
                  <Button type="button" disabled={isSavingInquiry} onClick={() => handleSaveInquiry('replied')}>
                    {isSavingInquiry ? 'Saving...' : 'Mark as Replied'}
                  </Button>
                </div>
              </DialogFooter>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminPage;
