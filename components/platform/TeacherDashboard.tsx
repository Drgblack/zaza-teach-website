'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  BookOpen, 
  Users, 
  Target,
  Award,
  Calendar as CalendarIcon,
  CheckCircle,
  AlertTriangle,
  Plus,
  Star,
  Download,
  MessageCircle,
  Zap,
  GraduationCap,
  FileText,
  Heart,
  Eye,
  Share2,
  ChevronRight,
  Trophy,
  Flame,
  Crown
} from 'lucide-react';

interface DashboardStats {
  lessonsCreated: number;
  studentsImpacted: number;
  hoursTeaching: number;
  resourcesShared: number;
  communityPoints: number;
  streakDays: number;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'teaching' | 'community' | 'learning' | 'collaboration';
  earnedDate?: string;
  progress?: number;
  target?: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface RecentActivity {
  id: string;
  type: 'lesson_created' | 'resource_shared' | 'comment_posted' | 'achievement_earned' | 'collaboration_joined';
  title: string;
  description: string;
  timestamp: string;
  metadata?: {
    lessonTitle?: string;
    collaborators?: number;
    downloads?: number;
  };
}

interface UpcomingTask {
  id: string;
  title: string;
  type: 'lesson_plan' | 'assessment' | 'meeting' | 'deadline';
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  completed?: boolean;
}

interface LearningGoal {
  id: string;
  title: string;
  description: string;
  category: string;
  progress: number;
  targetDate: string;
  milestones: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

// Mock data
const mockStats: DashboardStats = {
  lessonsCreated: 47,
  studentsImpacted: 1240,
  hoursTeaching: 156,
  resourcesShared: 23,
  communityPoints: 2847,
  streakDays: 12
};

const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'Lesson Master',
    description: 'Created 50 lesson plans',
    icon: BookOpen,
    category: 'teaching',
    progress: 47,
    target: 50,
    rarity: 'rare'
  },
  {
    id: '2',
    title: 'Community Helper',
    description: 'Helped 100 fellow teachers',
    icon: Users,
    category: 'community',
    earnedDate: '2 days ago',
    rarity: 'epic'
  },
  {
    id: '3',
    title: 'AI Pioneer',
    description: 'First to use new AI features',
    icon: Zap,
    category: 'learning',
    earnedDate: '1 week ago',
    rarity: 'legendary'
  }
];

const mockRecentActivity: RecentActivity[] = [
  {
    id: '1',
    type: 'lesson_created',
    title: 'Created new lesson plan',
    description: 'Interactive Math Fractions for 3rd Grade',
    timestamp: '2 hours ago',
    metadata: { lessonTitle: 'Interactive Math Fractions' }
  },
  {
    id: '2',
    type: 'achievement_earned',
    title: 'Earned achievement',
    description: 'Community Helper - Helped 100 teachers',
    timestamp: '2 days ago'
  },
  {
    id: '3',
    type: 'collaboration_joined',
    title: 'Joined collaboration',
    description: '5th Grade Science Planning Team',
    timestamp: '3 days ago',
    metadata: { collaborators: 8 }
  }
];

const mockUpcomingTasks: UpcomingTask[] = [
  {
    id: '1',
    title: 'Parent-Teacher Conferences',
    type: 'meeting',
    dueDate: 'Tomorrow',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Science Unit Assessment',
    type: 'assessment',
    dueDate: 'Friday',
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Weekly Lesson Plans',
    type: 'lesson_plan',
    dueDate: 'Sunday',
    priority: 'medium'
  }
];

const mockLearningGoals: LearningGoal[] = [
  {
    id: '1',
    title: 'Master AI-Assisted Teaching',
    description: 'Learn to effectively integrate AI tools into daily teaching practice',
    category: 'Professional Development',
    progress: 75,
    targetDate: 'End of Month',
    milestones: [
      { id: '1', title: 'Complete AI Basics Course', completed: true },
      { id: '2', title: 'Create 10 AI-Enhanced Lessons', completed: true },
      { id: '3', title: 'Share Best Practices', completed: true },
      { id: '4', title: 'Mentor Another Teacher', completed: false }
    ]
  },
  {
    id: '2',
    title: 'Differentiated Instruction Expert',
    description: 'Develop advanced skills in meeting diverse learning needs',
    category: 'Teaching Strategy',
    progress: 40,
    targetDate: 'Next Quarter',
    milestones: [
      { id: '1', title: 'Assessment Strategies Workshop', completed: true },
      { id: '2', title: 'Create Tiered Activities', completed: false },
      { id: '3', title: 'Implement UDL Principles', completed: false }
    ]
  }
];

interface TeacherDashboardProps {
  teacherName?: string;
  className?: string;
}

export function TeacherDashboard({ 
  teacherName = "Sarah",
  className = '' 
}: TeacherDashboardProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50';
      case 'rare': return 'border-blue-300 bg-blue-50';
      case 'epic': return 'border-purple-300 bg-purple-50';
      case 'legendary': return 'border-yellow-300 bg-yellow-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lesson_created': return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 'resource_shared': return <Share2 className="w-4 h-4 text-green-600" />;
      case 'comment_posted': return <MessageCircle className="w-4 h-4 text-purple-600" />;
      case 'achievement_earned': return <Trophy className="w-4 h-4 text-yellow-600" />;
      case 'collaboration_joined': return <Users className="w-4 h-4 text-orange-600" />;
      default: return <Star className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome back, {teacherName}! 👋</h1>
        <p className="text-muted-foreground">
          Here's what's happening in your teaching journey today
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Lessons</span>
              </div>
              <div className="text-2xl font-bold">{mockStats.lessonsCreated}</div>
              <p className="text-xs text-muted-foreground">Created this year</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Students</span>
              </div>
              <div className="text-2xl font-bold">{mockStats.studentsImpacted.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Impacted</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Hours</span>
              </div>
              <div className="text-2xl font-bold">{mockStats.hoursTeaching}</div>
              <p className="text-xs text-muted-foreground">Teaching time</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium">Shared</span>
              </div>
              <div className="text-2xl font-bold">{mockStats.resourcesShared}</div>
              <p className="text-xs text-muted-foreground">Resources</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium">Points</span>
              </div>
              <div className="text-2xl font-bold">{mockStats.communityPoints.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Community</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium">Streak</span>
              </div>
              <div className="text-2xl font-bold">{mockStats.streakDays}</div>
              <p className="text-xs text-muted-foreground">Days active</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col">
                  <Plus className="w-6 h-6 mb-2" />
                  <span className="text-sm">New Lesson</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Users className="w-6 h-6 mb-2" />
                  <span className="text-sm">Join Workspace</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <FileText className="w-6 h-6 mb-2" />
                  <span className="text-sm">Browse Resources</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <MessageCircle className="w-6 h-6 mb-2" />
                  <span className="text-sm">Community</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Learning Goals Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Learning Goals
              </CardTitle>
              <CardDescription>
                Track your professional development progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {mockLearningGoals.map(goal => (
                <div key={goal.id} className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">{goal.title}</h3>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                      <Badge variant="secondary">{goal.category}</Badge>
                    </div>
                    <div className="text-right text-sm">
                      <div className="font-medium">{goal.progress}%</div>
                      <div className="text-muted-foreground">{goal.targetDate}</div>
                    </div>
                  </div>
                  
                  <Progress value={goal.progress} className="w-full" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {goal.milestones.map(milestone => (
                      <div key={milestone.id} className="flex items-center gap-2">
                        <CheckCircle 
                          className={`w-4 h-4 ${
                            milestone.completed 
                              ? 'text-green-600 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                        <span className={`text-sm ${
                          milestone.completed 
                            ? 'text-green-700' 
                            : 'text-muted-foreground'
                        }`}>
                          {milestone.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-gray-100">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{activity.title}</h4>
                        <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      {activity.metadata && (
                        <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
                          {activity.metadata.downloads && (
                            <span>{activity.metadata.downloads} downloads</span>
                          )}
                          {activity.metadata.collaborators && (
                            <span>{activity.metadata.collaborators} collaborators</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Achievements
              </CardTitle>
              <CardDescription>
                Your teaching milestones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockAchievements.map(achievement => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={achievement.id} 
                    className={`p-3 rounded-lg border-2 ${getRarityColor(achievement.rarity)}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-white">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          {achievement.rarity === 'legendary' && <Crown className="w-4 h-4 text-yellow-600" />}
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                        
                        {achievement.earnedDate ? (
                          <Badge variant="secondary" className="text-xs">
                            Earned {achievement.earnedDate}
                          </Badge>
                        ) : achievement.progress !== undefined && achievement.target !== undefined ? (
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>{achievement.progress}/{achievement.target}</span>
                              <span>{Math.round((achievement.progress / achievement.target) * 100)}%</span>
                            </div>
                            <Progress value={(achievement.progress / achievement.target) * 100} className="h-2" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <Button variant="outline" className="w-full">
                View All Achievements
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockUpcomingTasks.map(task => (
                <div 
                  key={task.id} 
                  className={`p-3 rounded-lg border-l-4 ${getPriorityColor(task.priority)}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{task.title}</h4>
                    <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs capitalize">
                      {task.type.replace('_', ' ')}
                    </Badge>
                    <Badge 
                      variant={task.priority === 'high' ? 'destructive' : 'secondary'} 
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </Button>
            </CardContent>
          </Card>

          {/* Community Highlights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Community Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>Your lesson got 15 new likes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MessageCircle className="w-4 h-4 text-blue-500" />
                  <span>3 new comments on your post</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Download className="w-4 h-4 text-green-500" />
                  <span>25 teachers downloaded your resource</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-600">Rank #47</div>
                <div className="text-sm text-muted-foreground">This month's contributors</div>
              </div>
              
              <Button variant="outline" className="w-full">
                View Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}