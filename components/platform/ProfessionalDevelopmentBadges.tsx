'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Award, 
  Crown, 
  Star, 
  Trophy, 
  Medal, 
  Target,
  Zap,
  BookOpen,
  Users,
  MessageCircle,
  Heart,
  Share2,
  CheckCircle,
  Clock,
  TrendingUp,
  Gift,
  Download,
  Calendar,
  Eye,
  Lock,
  Unlock,
  ChevronRight,
  Plus,
  ExternalLink,
  Flame,
  Globe,
  Lightbulb,
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface ProfessionalBadge {
  id: string;
  title: string;
  description: string;
  category: 'teaching' | 'community' | 'learning' | 'collaboration' | 'innovation' | 'leadership';
  tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  icon: React.ComponentType<{ className?: string }>;
  criteria: BadgeCriterion[];
  rewards: BadgeReward[];
  isEarned?: boolean;
  earnedDate?: string;
  progress?: number;
  totalRequired?: number;
  nextMilestone?: number;
  linkedCourses?: string[];
  skillsValidated?: string[];
}

interface BadgeCriterion {
  id: string;
  description: string;
  completed: boolean;
  progress?: number;
  target?: number;
}

interface BadgeReward {
  type: 'points' | 'access' | 'recognition' | 'certificate' | 'discount';
  description: string;
  value?: string;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedHours: number;
  badges: string[];
  modules: LearningModule[];
  prerequisites?: string[];
  isRecommended?: boolean;
}

interface LearningModule {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'quiz' | 'project' | 'discussion';
  duration: string;
  completed: boolean;
}

interface Achievement {
  id: string;
  badgeId: string;
  teacherName: string;
  teacherAvatar?: string;
  earnedDate: string;
  celebrationMessage?: string;
}

// Mock data
const mockBadges: ProfessionalBadge[] = [
  {
    id: '1',
    title: 'AI Teaching Pioneer',
    description: 'Master the integration of AI tools in educational practice',
    category: 'innovation',
    tier: 'gold',
    rarity: 'epic',
    icon: Zap,
    criteria: [
      { id: '1', description: 'Complete AI in Education course', completed: true },
      { id: '2', description: 'Create 10 AI-enhanced lessons', completed: true },
      { id: '3', description: 'Share AI best practices with community', completed: true },
      { id: '4', description: 'Mentor 5 teachers in AI adoption', completed: false, progress: 3, target: 5 }
    ],
    rewards: [
      { type: 'points', description: 'Earn 500 community points', value: '500' },
      { type: 'access', description: 'Unlock advanced AI tools', value: 'Premium AI Features' },
      { type: 'recognition', description: 'Featured on AI Innovators leaderboard' },
      { type: 'certificate', description: 'Digital certificate of completion' }
    ],
    isEarned: false,
    progress: 85,
    totalRequired: 4,
    nextMilestone: 2,
    linkedCourses: ['ai-foundations', 'prompt-engineering', 'ai-assessment'],
    skillsValidated: ['AI Integration', 'Prompt Engineering', 'Digital Pedagogy']
  },
  {
    id: '2',
    title: 'Community Champion',
    description: 'Exceptional contributor to the teaching community',
    category: 'community',
    tier: 'silver',
    rarity: 'rare',
    icon: Users,
    criteria: [
      { id: '1', description: 'Help 50 fellow teachers', completed: true },
      { id: '2', description: 'Receive 100+ likes on contributions', completed: true },
      { id: '3', description: 'Host a community workshop', completed: true }
    ],
    rewards: [
      { type: 'points', description: 'Earn 300 community points', value: '300' },
      { type: 'recognition', description: 'Community Champion badge display' },
      { type: 'access', description: 'Access to mentor program' }
    ],
    isEarned: true,
    earnedDate: '2 weeks ago',
    skillsValidated: ['Community Leadership', 'Peer Support', 'Knowledge Sharing']
  },
  {
    id: '3',
    title: 'Differentiation Expert',
    description: 'Master differentiated instruction strategies',
    category: 'teaching',
    tier: 'gold',
    rarity: 'rare',
    icon: Target,
    criteria: [
      { id: '1', description: 'Complete Differentiation Masterclass', completed: false, progress: 60, target: 100 },
      { id: '2', description: 'Implement UDL principles in 20 lessons', completed: false, progress: 12, target: 20 },
      { id: '3', description: 'Share differentiation strategies', completed: false }
    ],
    rewards: [
      { type: 'certificate', description: 'Differentiation Expert Certificate' },
      { type: 'access', description: 'Advanced teaching resources' },
      { type: 'points', description: 'Earn 400 community points', value: '400' }
    ],
    isEarned: false,
    progress: 45,
    totalRequired: 3,
    linkedCourses: ['udl-principles', 'differentiation-strategies', 'inclusive-teaching'],
    skillsValidated: ['Universal Design for Learning', 'Adaptive Teaching', 'Inclusive Education']
  },
  {
    id: '4',
    title: 'Lesson Planning Master',
    description: 'Create exceptional, standards-aligned lesson plans',
    category: 'teaching',
    tier: 'bronze',
    rarity: 'common',
    icon: BookOpen,
    criteria: [
      { id: '1', description: 'Create 25 lesson plans', completed: true },
      { id: '2', description: 'Align lessons with standards', completed: true },
      { id: '3', description: 'Receive positive peer feedback', completed: true }
    ],
    rewards: [
      { type: 'points', description: 'Earn 150 community points', value: '150' },
      { type: 'access', description: 'Premium lesson templates' }
    ],
    isEarned: true,
    earnedDate: '1 month ago',
    skillsValidated: ['Lesson Planning', 'Standards Alignment', 'Instructional Design']
  },
  {
    id: '5',
    title: 'Innovation Leader',
    description: 'Pioneer new teaching methodologies and tools',
    category: 'leadership',
    tier: 'platinum',
    rarity: 'legendary',
    icon: Crown,
    criteria: [
      { id: '1', description: 'Lead 3 innovation projects', completed: false, progress: 1, target: 3 },
      { id: '2', description: 'Publish research or case study', completed: false },
      { id: '3', description: 'Present at education conference', completed: false },
      { id: '4', description: 'Mentor 10+ teachers in innovation', completed: false, progress: 4, target: 10 }
    ],
    rewards: [
      { type: 'recognition', description: 'Featured as Innovation Leader' },
      { type: 'access', description: 'Beta access to new features' },
      { type: 'points', description: 'Earn 1000 community points', value: '1000' },
      { type: 'certificate', description: 'Educational Innovation Leadership Certificate' }
    ],
    isEarned: false,
    progress: 20,
    totalRequired: 4,
    linkedCourses: ['innovation-leadership', 'research-methods', 'change-management'],
    skillsValidated: ['Innovation Leadership', 'Research & Development', 'Change Management']
  }
];

const mockLearningPaths: LearningPath[] = [
  {
    id: '1',
    title: 'AI-Enhanced Teaching Mastery',
    description: 'Complete guide to integrating artificial intelligence in your classroom',
    difficulty: 'intermediate',
    estimatedHours: 12,
    badges: ['1'], // AI Teaching Pioneer
    modules: [
      { id: '1', title: 'Introduction to AI in Education', type: 'video', duration: '30 min', completed: true },
      { id: '2', title: 'Prompt Engineering for Teachers', type: 'video', duration: '45 min', completed: true },
      { id: '3', title: 'Creating AI-Enhanced Lessons', type: 'project', duration: '2 hours', completed: false },
      { id: '4', title: 'Ethical AI Use in Education', type: 'reading', duration: '20 min', completed: false }
    ],
    isRecommended: true
  },
  {
    id: '2',
    title: 'Community Leadership Track',
    description: 'Develop skills to lead and support your teaching community',
    difficulty: 'advanced',
    estimatedHours: 8,
    badges: ['2'], // Community Champion
    modules: [
      { id: '1', title: 'Building Teaching Communities', type: 'video', duration: '40 min', completed: true },
      { id: '2', title: 'Peer Mentoring Strategies', type: 'reading', duration: '25 min', completed: true },
      { id: '3', title: 'Leading Professional Discussions', type: 'discussion', duration: '1 hour', completed: true }
    ]
  }
];

const mockRecentAchievements: Achievement[] = [
  {
    id: '1',
    badgeId: '2',
    teacherName: 'Sarah Johnson',
    teacherAvatar: '/api/placeholder/40/40',
    earnedDate: '2 hours ago',
    celebrationMessage: 'Just earned Community Champion for helping 50+ fellow teachers! 🎉'
  },
  {
    id: '2',
    badgeId: '4',
    teacherName: 'Mike Chen',
    teacherAvatar: '/api/placeholder/40/40',
    earnedDate: '1 day ago',
    celebrationMessage: 'Completed Lesson Planning Master - 25 standards-aligned lessons created!'
  }
];

interface ProfessionalDevelopmentBadgesProps {
  className?: string;
}

export function ProfessionalDevelopmentBadges({ className = '' }: ProfessionalDevelopmentBadgesProps) {
  const [selectedBadge, setSelectedBadge] = useState<ProfessionalBadge | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [showEarnedOnly, setShowEarnedOnly] = useState(false);

  const categories = ['teaching', 'community', 'learning', 'collaboration', 'innovation', 'leadership'];

  const filteredBadges = mockBadges.filter(badge => {
    const matchesCategory = !activeCategory || badge.category === activeCategory;
    const matchesEarned = !showEarnedOnly || badge.isEarned;
    return matchesCategory && matchesEarned;
  });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'bronze': return 'border-orange-300 bg-orange-50 text-orange-800';
      case 'silver': return 'border-gray-300 bg-gray-50 text-gray-800';
      case 'gold': return 'border-yellow-300 bg-yellow-50 text-yellow-800';
      case 'platinum': return 'border-purple-300 bg-purple-50 text-purple-800';
      case 'diamond': return 'border-blue-300 bg-blue-50 text-blue-800';
      default: return 'border-gray-300 bg-gray-50 text-gray-800';
    }
  };

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'common': return <Star className="w-3 h-3" />;
      case 'uncommon': return <Star className="w-3 h-3 fill-current" />;
      case 'rare': return <Sparkles className="w-3 h-3" />;
      case 'epic': return <Crown className="w-3 h-3" />;
      case 'legendary': return <Trophy className="w-3 h-3" />;
      default: return <Star className="w-3 h-3" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'teaching': return <BookOpen className="w-4 h-4" />;
      case 'community': return <Users className="w-4 h-4" />;
      case 'learning': return <GraduationCap className="w-4 h-4" />;
      case 'collaboration': return <MessageCircle className="w-4 h-4" />;
      case 'innovation': return <Lightbulb className="w-4 h-4" />;
      case 'leadership': return <Crown className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  const earnedBadges = mockBadges.filter(badge => badge.isEarned);
  const inProgressBadges = mockBadges.filter(badge => !badge.isEarned && badge.progress && badge.progress > 0);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Professional Development</h2>
        </div>
        <p className="text-muted-foreground">
          Earn badges, develop skills, and advance your teaching career
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium">Earned</span>
              </div>
              <div className="text-2xl font-bold">{earnedBadges.length}</div>
              <p className="text-xs text-muted-foreground">of {mockBadges.length} badges</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">In Progress</span>
              </div>
              <div className="text-2xl font-bold">{inProgressBadges.length}</div>
              <p className="text-xs text-muted-foreground">Active goals</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Points</span>
              </div>
              <div className="text-2xl font-bold">2,450</div>
              <p className="text-xs text-muted-foreground">Total earned</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Rank</span>
              </div>
              <div className="text-2xl font-bold">#47</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="badges" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="paths">Learning Paths</TabsTrigger>
          <TabsTrigger value="progress">My Progress</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        {/* Badges Tab */}
        <TabsContent value="badges" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={activeCategory === '' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory('')}
                >
                  All Categories
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className="capitalize"
                  >
                    {getCategoryIcon(category)}
                    <span className="ml-1">{category}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBadges.map(badge => {
              const IconComponent = badge.icon;
              return (
                <Card 
                  key={badge.id} 
                  className={`hover:shadow-lg transition-all cursor-pointer ${
                    badge.isEarned ? getTierColor(badge.tier) : 'opacity-75'
                  }`}
                  onClick={() => setSelectedBadge(badge)}
                >
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="text-center space-y-2">
                        <div className="relative">
                          <div className={`w-16 h-16 mx-auto rounded-full ${badge.isEarned ? 'bg-white' : 'bg-gray-100'} flex items-center justify-center border-2`}>
                            <IconComponent className={`w-8 h-8 ${badge.isEarned ? 'text-current' : 'text-gray-400'}`} />
                          </div>
                          {badge.isEarned && (
                            <div className="absolute -top-1 -right-1">
                              <CheckCircle className="w-6 h-6 text-green-600 bg-white rounded-full" />
                            </div>
                          )}
                          {!badge.isEarned && (
                            <div className="absolute -top-1 -right-1">
                              <Lock className="w-5 h-5 text-gray-400" />
                            </div>
                          )}
                        </div>
                        
                        <div className="space-y-1">
                          <h3 className="font-semibold">{badge.title}</h3>
                          <div className="flex items-center justify-center gap-2">
                            <Badge variant="outline" className="text-xs capitalize">
                              {badge.tier}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs">
                              {getRarityIcon(badge.rarity)}
                              <span className="capitalize">{badge.rarity}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-center text-muted-foreground line-clamp-2">
                        {badge.description}
                      </p>

                      {/* Progress */}
                      {!badge.isEarned && badge.progress !== undefined && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{badge.progress}%</span>
                          </div>
                          <Progress value={badge.progress} className="h-2" />
                          {badge.nextMilestone && (
                            <p className="text-xs text-muted-foreground">
                              Next: Complete {badge.nextMilestone} more criteria
                            </p>
                          )}
                        </div>
                      )}

                      {/* Earned Date */}
                      {badge.isEarned && badge.earnedDate && (
                        <div className="text-center">
                          <Badge variant="secondary" className="text-xs">
                            <Trophy className="w-3 h-3 mr-1" />
                            Earned {badge.earnedDate}
                          </Badge>
                        </div>
                      )}

                      {/* Skills */}
                      {badge.skillsValidated && badge.skillsValidated.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-xs font-medium">Skills Validated:</p>
                          <div className="flex flex-wrap gap-1">
                            {badge.skillsValidated.slice(0, 2).map(skill => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {badge.skillsValidated.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{badge.skillsValidated.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Badge Detail Modal */}
          {selectedBadge && (
            <Dialog open={!!selectedBadge} onOpenChange={() => setSelectedBadge(null)}>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full ${selectedBadge.isEarned ? getTierColor(selectedBadge.tier) : 'bg-gray-100'} flex items-center justify-center border-2`}>
                      <selectedBadge.icon className={`w-8 h-8 ${selectedBadge.isEarned ? 'text-current' : 'text-gray-400'}`} />
                    </div>
                    <div>
                      <DialogTitle className="text-xl">{selectedBadge.title}</DialogTitle>
                      <DialogDescription>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="capitalize">
                            {selectedBadge.tier}
                          </Badge>
                          <Badge variant="secondary" className="capitalize">
                            {selectedBadge.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {getRarityIcon(selectedBadge.rarity)}
                            <span className="capitalize text-xs">{selectedBadge.rarity}</span>
                          </div>
                        </div>
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground">{selectedBadge.description}</p>
                  
                  {/* Progress */}
                  {!selectedBadge.isEarned && selectedBadge.progress !== undefined && (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Overall Progress</span>
                        <span>{selectedBadge.progress}%</span>
                      </div>
                      <Progress value={selectedBadge.progress} />
                    </div>
                  )}

                  {/* Criteria */}
                  <div>
                    <h4 className="font-medium mb-3">Requirements</h4>
                    <div className="space-y-3">
                      {selectedBadge.criteria.map(criterion => (
                        <div key={criterion.id} className="flex items-start gap-3">
                          <div className="mt-1">
                            {criterion.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className={`text-sm ${criterion.completed ? 'text-green-700' : 'text-gray-600'}`}>
                              {criterion.description}
                            </p>
                            {!criterion.completed && criterion.progress !== undefined && criterion.target !== undefined && (
                              <div className="mt-2">
                                <div className="flex justify-between text-xs">
                                  <span>{criterion.progress}/{criterion.target}</span>
                                  <span>{Math.round((criterion.progress / criterion.target) * 100)}%</span>
                                </div>
                                <Progress 
                                  value={(criterion.progress / criterion.target) * 100} 
                                  className="h-1 mt-1" 
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rewards */}
                  <div>
                    <h4 className="font-medium mb-3">Rewards</h4>
                    <div className="space-y-2">
                      {selectedBadge.rewards.map((reward, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Gift className="w-4 h-4 text-blue-600" />
                          <span>{reward.description}</span>
                          {reward.value && (
                            <Badge variant="outline" className="text-xs">
                              {reward.value}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  {selectedBadge.skillsValidated && selectedBadge.skillsValidated.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3">Skills Validated</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedBadge.skillsValidated.map(skill => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Linked Courses */}
                  {selectedBadge.linkedCourses && selectedBadge.linkedCourses.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3">Recommended Learning</h4>
                      <div className="space-y-2">
                        {selectedBadge.linkedCourses.map(course => (
                          <Button key={course} variant="outline" size="sm" className="w-full justify-start">
                            <BookOpen className="w-4 h-4 mr-2" />
                            {course.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            <ExternalLink className="w-3 h-3 ml-auto" />
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    {selectedBadge.isEarned ? (
                      <Button className="flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Achievement
                      </Button>
                    ) : (
                      <Button className="flex-1">
                        <Target className="w-4 h-4 mr-2" />
                        Start Progress
                      </Button>
                    )}
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Certificate
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </TabsContent>

        {/* Learning Paths Tab */}
        <TabsContent value="paths" className="space-y-6">
          <div className="grid gap-6">
            {mockLearningPaths.map(path => (
              <Card key={path.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{path.title}</h3>
                          {path.isRecommended && (
                            <Badge className="bg-blue-100 text-blue-800">Recommended</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">{path.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="capitalize">{path.difficulty}</span>
                          <span>{path.estimatedHours} hours</span>
                          <span>{path.modules.length} modules</span>
                        </div>
                      </div>
                      
                      <Button>
                        Start Path
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{path.modules.filter(m => m.completed).length}/{path.modules.length} modules</span>
                      </div>
                      <Progress value={(path.modules.filter(m => m.completed).length / path.modules.length) * 100} />
                    </div>

                    {/* Modules Preview */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Modules</h4>
                      <div className="space-y-1">
                        {path.modules.slice(0, 3).map(module => (
                          <div key={module.id} className="flex items-center gap-2 text-sm">
                            {module.completed ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <div className="w-4 h-4 border border-gray-300 rounded-full" />
                            )}
                            <span className={module.completed ? 'text-green-700' : 'text-gray-600'}>
                              {module.title}
                            </span>
                            <Badge variant="outline" className="text-xs ml-auto">
                              {module.duration}
                            </Badge>
                          </div>
                        ))}
                        {path.modules.length > 3 && (
                          <p className="text-xs text-muted-foreground pl-6">
                            +{path.modules.length - 3} more modules
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Associated Badges */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Badges You Can Earn</h4>
                      <div className="flex gap-2">
                        {path.badges.map(badgeId => {
                          const badge = mockBadges.find(b => b.id === badgeId);
                          return badge ? (
                            <div key={badge.id} className="flex items-center gap-1">
                              <badge.icon className="w-4 h-4" />
                              <span className="text-xs">{badge.title}</span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* My Progress Tab */}
        <TabsContent value="progress" className="space-y-6">
          <div className="grid gap-6">
            {/* Current Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Current Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inProgressBadges.slice(0, 3).map(badge => (
                    <div key={badge.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <badge.icon className="w-5 h-5" />
                          <span className="font-medium">{badge.title}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{badge.progress}%</span>
                      </div>
                      <Progress value={badge.progress} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {earnedBadges.slice(0, 3).map(badge => (
                    <div key={badge.id} className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${getTierColor(badge.tier)} flex items-center justify-center`}>
                        <badge.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{badge.title}</h4>
                        <p className="text-sm text-muted-foreground">Earned {badge.earnedDate}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Recent Community Achievements
              </CardTitle>
              <CardDescription>
                Celebrate your fellow educators' accomplishments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecentAchievements.map(achievement => {
                  const badge = mockBadges.find(b => b.id === achievement.badgeId);
                  return badge ? (
                    <div key={achievement.id} className="flex items-start gap-3 p-3 border rounded-lg">
                      <Avatar>
                        <AvatarImage src={achievement.teacherAvatar} />
                        <AvatarFallback>
                          {achievement.teacherName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{achievement.teacherName}</span>
                          <span className="text-sm text-muted-foreground">{achievement.earnedDate}</span>
                        </div>
                        {achievement.celebrationMessage && (
                          <p className="text-sm">{achievement.celebrationMessage}</p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <div className={`w-6 h-6 rounded-full ${getTierColor(badge.tier)} flex items-center justify-center`}>
                            <badge.icon className="w-3 h-3" />
                          </div>
                          <span className="text-sm font-medium">{badge.title}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : null;
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}