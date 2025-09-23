'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  Users, 
  Plus, 
  MessageCircle, 
  Share2, 
  FileText, 
  Calendar, 
  Clock,
  Star,
  Eye,
  Download,
  Heart,
  BookOpen,
  Target,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  Pencil,
  Trash2
} from 'lucide-react';

interface Teacher {
  id: string;
  name: string;
  avatar?: string;
  school: string;
  grade: string;
  subjects: string[];
  joinedDate: string;
  contributionCount: number;
  rating: number;
  isOnline?: boolean;
}

interface Workspace {
  id: string;
  name: string;
  description: string;
  subject: string;
  grade: string;
  members: Teacher[];
  owner: Teacher;
  createdDate: string;
  lastActivity: string;
  resourceCount: number;
  isPrivate: boolean;
  tags: string[];
}

interface CollaborationPost {
  id: string;
  author: Teacher;
  type: 'lesson' | 'resource' | 'question' | 'announcement';
  title: string;
  content: string;
  attachments?: string[];
  likes: number;
  comments: number;
  createdDate: string;
  isLiked?: boolean;
  tags: string[];
}

// Mock data
const mockTeachers: Teacher[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: '/api/placeholder/40/40',
    school: 'Lincoln Elementary',
    grade: '3rd',
    subjects: ['Math', 'Science'],
    joinedDate: '2024-01-15',
    contributionCount: 45,
    rating: 4.8,
    isOnline: true
  },
  {
    id: '2',
    name: 'Mike Chen',
    avatar: '/api/placeholder/40/40',
    school: 'Roosevelt Middle',
    grade: '6th-8th',
    subjects: ['Math', 'Technology'],
    joinedDate: '2024-02-01',
    contributionCount: 32,
    rating: 4.6,
    isOnline: false
  }
];

const mockWorkspaces: Workspace[] = [
  {
    id: '1',
    name: '3rd Grade Math Mastery',
    description: 'Collaborative space for 3rd grade math teachers to share resources and strategies',
    subject: 'Mathematics',
    grade: '3rd',
    members: mockTeachers,
    owner: mockTeachers[0],
    createdDate: '2024-01-15',
    lastActivity: '2 hours ago',
    resourceCount: 28,
    isPrivate: false,
    tags: ['Common Core', 'Hands-on Learning', 'Assessment']
  }
];

const mockPosts: CollaborationPost[] = [
  {
    id: '1',
    author: mockTeachers[0],
    type: 'lesson',
    title: 'Interactive Multiplication Arrays',
    content: 'Just finished an amazing lesson using physical objects to teach multiplication arrays. Students really grasped the concept when they could manipulate the items themselves. Sharing the lesson plan and materials list!',
    attachments: ['multiplication-arrays-lesson.pdf', 'materials-list.docx'],
    likes: 12,
    comments: 5,
    createdDate: '2 hours ago',
    isLiked: false,
    tags: ['Multiplication', 'Hands-on', 'Visual Learning']
  },
  {
    id: '2',
    author: mockTeachers[1],
    type: 'question',
    title: 'Best practices for differentiated math instruction?',
    content: 'I have students ranging from below grade level to advanced in my 6th grade math class. What are your go-to strategies for ensuring everyone is challenged appropriately?',
    likes: 8,
    comments: 12,
    createdDate: '5 hours ago',
    isLiked: true,
    tags: ['Differentiation', 'Classroom Management']
  }
];

interface TeacherCollaborationWorkspaceProps {
  className?: string;
}

export function TeacherCollaborationWorkspace({ className = '' }: TeacherCollaborationWorkspaceProps) {
  const [activeWorkspace, setActiveWorkspace] = useState<string>('1');
  const [newPostType, setNewPostType] = useState<'lesson' | 'resource' | 'question' | 'announcement'>('lesson');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [showCreateWorkspace, setShowCreateWorkspace] = useState(false);

  const currentWorkspace = mockWorkspaces.find(w => w.id === activeWorkspace);

  const getPostIcon = (type: string) => {
    switch (type) {
      case 'lesson': return <BookOpen className="w-4 h-4" />;
      case 'resource': return <FileText className="w-4 h-4" />;
      case 'question': return <AlertCircle className="w-4 h-4" />;
      case 'announcement': return <Target className="w-4 h-4" />;
      default: return <MessageCircle className="w-4 h-4" />;
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'lesson': return 'bg-blue-100 text-blue-800';
      case 'resource': return 'bg-green-100 text-green-800';
      case 'question': return 'bg-orange-100 text-orange-800';
      case 'announcement': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCreatePost = () => {
    // In real implementation, this would create a new post
    console.log('Creating post:', { newPostType, newPostTitle, newPostContent });
    setNewPostTitle('');
    setNewPostContent('');
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Collaboration Workspace</h2>
          </div>
          <p className="text-muted-foreground">
            Connect, share, and collaborate with fellow educators
          </p>
        </div>
        
        <Dialog open={showCreateWorkspace} onOpenChange={setShowCreateWorkspace}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Workspace
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Workspace</DialogTitle>
              <DialogDescription>
                Start a new collaborative space for your teaching community
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Workspace name" />
              <Textarea placeholder="Description" rows={3} />
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="k">Kindergarten</SelectItem>
                    <SelectItem value="1-2">1st-2nd Grade</SelectItem>
                    <SelectItem value="3-5">3rd-5th Grade</SelectItem>
                    <SelectItem value="6-8">6th-8th Grade</SelectItem>
                    <SelectItem value="9-12">9th-12th Grade</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="ela">English Language Arts</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="social">Social Studies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full" onClick={() => setShowCreateWorkspace(false)}>
                Create Workspace
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Workspace Selector */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                {currentWorkspace?.name}
                {currentWorkspace?.isPrivate && (
                  <Badge variant="secondary">Private</Badge>
                )}
              </CardTitle>
              <CardDescription>{currentWorkspace?.description}</CardDescription>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {currentWorkspace?.members.length} members
              </div>
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                {currentWorkspace?.resourceCount} resources
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {currentWorkspace?.lastActivity}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="feed" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="feed">Activity Feed</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        {/* Activity Feed */}
        <TabsContent value="feed" className="space-y-6">
          {/* Create New Post */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Share with the workspace</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-4 gap-2">
                {(['lesson', 'resource', 'question', 'announcement'] as const).map(type => (
                  <Button
                    key={type}
                    variant={newPostType === type ? 'default' : 'outline'}
                    onClick={() => setNewPostType(type)}
                    className="capitalize"
                  >
                    {getPostIcon(type)}
                    <span className="ml-2">{type}</span>
                  </Button>
                ))}
              </div>
              
              <Input
                placeholder="What would you like to share?"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
              />
              
              <Textarea
                placeholder="Add details, materials, or ask your question..."
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                rows={3}
              />
              
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Attach Files
                </Button>
                <Button onClick={handleCreatePost} disabled={!newPostTitle || !newPostContent}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Posts Feed */}
          <div className="space-y-4">
            {mockPosts.map(post => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Post Header */}
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{post.author.name}</span>
                              <Badge variant="secondary" className="text-xs">
                                {post.author.school}
                              </Badge>
                              {post.author.isOnline && (
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Badge className={getPostTypeColor(post.type)}>
                                {getPostIcon(post.type)}
                                <span className="ml-1 capitalize">{post.type}</span>
                              </Badge>
                              <span>{post.createdDate}</span>
                            </div>
                          </div>
                          
                          <Button variant="ghost" size="sm">
                            <Pencil className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                          <p className="text-muted-foreground">{post.content}</p>
                        </div>

                        {/* Tags */}
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {post.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Attachments */}
                        {post.attachments && post.attachments.length > 0 && (
                          <div className="space-y-2">
                            <Separator />
                            <div className="space-y-1">
                              {post.attachments.map(attachment => (
                                <div key={attachment} className="flex items-center gap-2 text-sm">
                                  <FileText className="w-4 h-4 text-blue-600" />
                                  <span className="text-blue-600 hover:underline cursor-pointer">
                                    {attachment}
                                  </span>
                                  <Button variant="ghost" size="sm">
                                    <Download className="w-3 h-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center gap-4">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className={post.isLiked ? 'text-red-600' : ''}
                            >
                              <Heart className={`w-4 h-4 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                          </div>
                          
                          <Button variant="ghost" size="sm">
                            <BookOpen className="w-4 h-4 mr-1" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Shared Resources</CardTitle>
              <CardDescription>
                Files, templates, and materials shared by workspace members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <p>Resource sharing coming soon!</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Members Tab */}
        <TabsContent value="members">
          <Card>
            <CardHeader>
              <CardTitle>Workspace Members</CardTitle>
              <CardDescription>
                Teachers collaborating in this workspace
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentWorkspace?.members.map(member => (
                  <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{member.name}</h3>
                          {member.isOnline && (
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {member.school} • {member.grade} Grade • {member.subjects.join(', ')}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {member.rating}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {member.contributionCount} contributions
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Calendar Tab */}
        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Collaboration Calendar</CardTitle>
              <CardDescription>
                Shared events, meetings, and deadlines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <p>Shared calendar coming soon!</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}