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
  MessageSquare, 
  Plus, 
  Pin, 
  TrendingUp, 
  Clock, 
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Search,
  Filter,
  ChevronUp,
  ChevronDown,
  Award,
  Crown,
  Zap,
  BookOpen,
  Users,
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface ForumUser {
  id: string;
  name: string;
  avatar?: string;
  title: string;
  reputation: number;
  badgeLevel: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  postsCount: number;
  joinedDate: string;
  isOnline?: boolean;
  isModerator?: boolean;
}

interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  topicsCount: number;
  postsCount: number;
  lastPost?: {
    title: string;
    author: string;
    timestamp: string;
  };
}

interface ForumTopic {
  id: string;
  title: string;
  content: string;
  author: ForumUser;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  views: number;
  replies: number;
  likes: number;
  isPinned?: boolean;
  isSolved?: boolean;
  isLocked?: boolean;
  lastReply?: {
    author: string;
    timestamp: string;
  };
}

interface ForumPost {
  id: string;
  content: string;
  author: ForumUser;
  topicId: string;
  createdAt: string;
  likes: number;
  isAcceptedAnswer?: boolean;
  isEdited?: boolean;
  replies?: ForumPost[];
}

// Mock data
const mockUsers: ForumUser[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: '/api/placeholder/40/40',
    title: 'Master Educator',
    reputation: 2450,
    badgeLevel: 'Gold',
    postsCount: 127,
    joinedDate: 'Jan 2024',
    isOnline: true,
    isModerator: true
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    avatar: '/api/placeholder/40/40',
    title: 'Science Specialist',
    reputation: 1890,
    badgeLevel: 'Silver',
    postsCount: 89,
    joinedDate: 'Feb 2024',
    isOnline: false
  }
];

const forumCategories: ForumCategory[] = [
  {
    id: 'lesson-planning',
    name: 'Lesson Planning',
    description: 'Share strategies, templates, and ideas for effective lesson planning',
    icon: BookOpen,
    color: 'text-blue-600',
    topicsCount: 234,
    postsCount: 1456,
    lastPost: {
      title: 'Interactive Math Activities for 3rd Grade',
      author: 'Sarah Chen',
      timestamp: '2 hours ago'
    }
  },
  {
    id: 'classroom-management',
    name: 'Classroom Management',
    description: 'Discuss behavior strategies, organization tips, and classroom culture',
    icon: Users,
    color: 'text-green-600',
    topicsCount: 189,
    postsCount: 892,
    lastPost: {
      title: 'Positive reinforcement systems that work',
      author: 'Mike Rodriguez',
      timestamp: '4 hours ago'
    }
  },
  {
    id: 'technology',
    name: 'Educational Technology',
    description: 'Explore digital tools, AI integration, and tech best practices',
    icon: Zap,
    color: 'text-purple-600',
    topicsCount: 156,
    postsCount: 743,
    lastPost: {
      title: 'AI tools for assessment creation',
      author: 'Jessica Park',
      timestamp: '6 hours ago'
    }
  },
  {
    id: 'help',
    name: 'Help & Support',
    description: 'Get help with platform features and general teaching questions',
    icon: HelpCircle,
    color: 'text-orange-600',
    topicsCount: 98,
    postsCount: 456,
    lastPost: {
      title: 'How to align lessons with standards?',
      author: 'New Teacher',
      timestamp: '1 day ago'
    }
  }
];

const mockTopics: ForumTopic[] = [
  {
    id: '1',
    title: 'Best practices for engaging reluctant learners in math?',
    content: 'I have several students who seem to shut down when we start math. Looking for creative ways to make math more appealing and accessible. What has worked for you?',
    author: mockUsers[1],
    category: 'lesson-planning',
    tags: ['Math', 'Engagement', 'Reluctant Learners'],
    createdAt: '2 hours ago',
    updatedAt: '30 minutes ago',
    views: 45,
    replies: 8,
    likes: 12,
    isPinned: false,
    isSolved: false,
    lastReply: {
      author: 'Sarah Chen',
      timestamp: '30 minutes ago'
    }
  },
  {
    id: '2',
    title: 'How to implement AI lesson planning effectively?',
    content: 'I\'m new to using AI for lesson planning. What are your best tips for getting quality outputs? Which prompts work best?',
    author: mockUsers[0],
    category: 'technology',
    tags: ['AI', 'Lesson Planning', 'Prompts'],
    createdAt: '5 hours ago',
    updatedAt: '1 hour ago',
    views: 78,
    replies: 15,
    likes: 23,
    isPinned: true,
    isSolved: true,
    lastReply: {
      author: 'Mike Rodriguez',
      timestamp: '1 hour ago'
    }
  }
];

interface CommunityForumProps {
  className?: string;
}

export function CommunityForum({ className = '' }: CommunityForumProps) {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'trending'>('recent');
  const [showCreateTopic, setShowCreateTopic] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicContent, setNewTopicContent] = useState('');
  const [newTopicCategory, setNewTopicCategory] = useState('');

  const filteredTopics = mockTopics.filter(topic => {
    const matchesCategory = !activeCategory || topic.category === activeCategory;
    const matchesSearch = !searchTerm || 
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const getBadgeIcon = (level: string) => {
    switch (level) {
      case 'Bronze': return <Award className="w-4 h-4 text-orange-600" />;
      case 'Silver': return <Award className="w-4 h-4 text-gray-500" />;
      case 'Gold': return <Award className="w-4 h-4 text-yellow-500" />;
      case 'Platinum': return <Crown className="w-4 h-4 text-purple-600" />;
      default: return <Award className="w-4 h-4 text-gray-400" />;
    }
  };

  const handleCreateTopic = () => {
    // In real implementation, this would create a new topic
    console.log('Creating topic:', { newTopicTitle, newTopicContent, newTopicCategory });
    setNewTopicTitle('');
    setNewTopicContent('');
    setNewTopicCategory('');
    setShowCreateTopic(false);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Community Forum</h2>
          </div>
          <p className="text-muted-foreground">
            Connect with fellow educators, share ideas, and get support
          </p>
        </div>
        
        <Dialog open={showCreateTopic} onOpenChange={setShowCreateTopic}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Topic
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Topic</DialogTitle>
              <DialogDescription>
                Start a new discussion in the community
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Topic title"
                value={newTopicTitle}
                onChange={(e) => setNewTopicTitle(e.target.value)}
              />
              <Select value={newTopicCategory} onValueChange={setNewTopicCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {forumCategories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="What would you like to discuss?"
                value={newTopicContent}
                onChange={(e) => setNewTopicContent(e.target.value)}
                rows={4}
              />
              <Button 
                className="w-full" 
                onClick={handleCreateTopic}
                disabled={!newTopicTitle || !newTopicContent || !newTopicCategory}
              >
                Create Topic
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="categories" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="topics">Recent Topics</TabsTrigger>
          <TabsTrigger value="leaderboard">Top Contributors</TabsTrigger>
        </TabsList>

        {/* Categories Overview */}
        <TabsContent value="categories" className="space-y-4">
          <div className="grid gap-4">
            {forumCategories.map(category => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    setActiveCategory(category.id);
                    // Switch to topics tab
                    const topicsTab = document.querySelector('[data-state="inactive"][value="topics"]') as HTMLElement;
                    topicsTab?.click();
                  }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gray-50 ${category.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{category.name}</h3>
                          <p className="text-muted-foreground text-sm">{category.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{category.topicsCount} topics</span>
                            <span>{category.postsCount} posts</span>
                          </div>
                        </div>
                      </div>
                      
                      {category.lastPost && (
                        <div className="text-right text-sm">
                          <p className="font-medium">{category.lastPost.title}</p>
                          <div className="text-muted-foreground">
                            by {category.lastPost.author} • {category.lastPost.timestamp}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Topics List */}
        <TabsContent value="topics" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={activeCategory} onValueChange={setActiveCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All categories</SelectItem>
                    {forumCategories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recent</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="trending">Trending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Topics List */}
          <div className="space-y-4">
            {filteredTopics.map(topic => (
              <Card key={topic.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Topic Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <Avatar>
                          <AvatarImage src={topic.author.avatar} />
                          <AvatarFallback>
                            {topic.author.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            {topic.isPinned && <Pin className="w-4 h-4 text-blue-600" />}
                            {topic.isSolved && <CheckCircle className="w-4 h-4 text-green-600" />}
                            <h3 className="font-semibold text-lg hover:text-blue-600 cursor-pointer">
                              {topic.title}
                            </h3>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-medium">{topic.author.name}</span>
                            {getBadgeIcon(topic.author.badgeLevel)}
                            {topic.author.isModerator && (
                              <Badge variant="secondary" className="text-xs">Moderator</Badge>
                            )}
                            <span>•</span>
                            <span>{topic.createdAt}</span>
                            <span>•</span>
                            <span>in {forumCategories.find(c => c.id === topic.category)?.name}</span>
                          </div>
                          
                          <p className="text-muted-foreground">{topic.content}</p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {topic.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Topic Stats */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {topic.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {topic.replies} replies
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {topic.likes} likes
                        </div>
                      </div>
                      
                      {topic.lastReply && (
                        <div className="text-sm text-muted-foreground">
                          Last reply by {topic.lastReply.author} • {topic.lastReply.timestamp}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredTopics.length === 0 && (
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="space-y-2">
                    <MessageSquare className="w-8 h-8 text-muted-foreground mx-auto" />
                    <h3 className="font-medium">No topics found</h3>
                    <p className="text-sm text-muted-foreground">
                      Try adjusting your search or filters, or create a new topic!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        {/* Leaderboard */}
        <TabsContent value="leaderboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Top Contributors This Month
              </CardTitle>
              <CardDescription>
                Recognizing our most helpful community members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockUsers.map((user, index) => (
                  <div key={user.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-bold text-muted-foreground">
                        #{index + 1}
                      </div>
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{user.name}</h3>
                          {getBadgeIcon(user.badgeLevel)}
                          {user.isModerator && (
                            <Badge variant="secondary" className="text-xs">Moderator</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{user.title}</p>
                      </div>
                    </div>
                    
                    <div className="ml-auto text-right">
                      <div className="font-semibold">{user.reputation} rep</div>
                      <div className="text-sm text-muted-foreground">
                        {user.postsCount} posts
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}