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
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  Store, 
  Plus, 
  Search, 
  Filter, 
  Star, 
  Download, 
  Eye,
  Heart,
  Share2,
  BookOpen,
  Clock,
  Users,
  Target,
  Award,
  TrendingUp,
  FileText,
  Image,
  Video,
  Presentation,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Gift,
  Verified,
  Flag,
  MessageCircle
} from 'lucide-react';

interface LessonCreator {
  id: string;
  name: string;
  avatar?: string;
  title: string;
  school: string;
  rating: number;
  totalSales: number;
  joinedDate: string;
  isVerified?: boolean;
  specialties: string[];
}

interface SharedLesson {
  id: string;
  title: string;
  description: string;
  creator: LessonCreator;
  subject: string;
  grade: string;
  duration: string; // e.g., "45 minutes"
  type: 'free' | 'premium';
  price?: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  downloadCount: number;
  createdDate: string;
  updatedDate: string;
  previewImages: string[];
  tags: string[];
  standards: string[];
  materials: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  features: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  category: 'lesson-plan' | 'activity' | 'assessment' | 'resource' | 'template';
}

interface Review {
  id: string;
  user: {
    name: string;
    avatar?: string;
    title: string;
  };
  rating: number;
  comment: string;
  date: string;
  isVerifiedPurchase?: boolean;
}

// Mock data
const mockCreators: LessonCreator[] = [
  {
    id: '1',
    name: 'Dr. Emily Watson',
    avatar: '/api/placeholder/40/40',
    title: 'Elementary Math Specialist',
    school: 'Riverside Elementary',
    rating: 4.9,
    totalSales: 1250,
    joinedDate: 'January 2024',
    isVerified: true,
    specialties: ['Mathematics', 'STEM', 'Hands-on Learning']
  },
  {
    id: '2',
    name: 'Carlos Rodriguez',
    avatar: '/api/placeholder/40/40',
    title: 'Science Department Head',
    school: 'Lincoln Middle School',
    rating: 4.7,
    totalSales: 890,
    joinedDate: 'March 2024',
    isVerified: true,
    specialties: ['Science', 'Technology Integration', 'Project-Based Learning']
  }
];

const mockLessons: SharedLesson[] = [
  {
    id: '1',
    title: 'Interactive Fraction Pizza Party',
    description: 'Engaging hands-on lesson that teaches fractions through pizza-making activities. Students learn equivalent fractions, addition, and comparison through real-world application.',
    creator: mockCreators[0],
    subject: 'Mathematics',
    grade: '3rd-4th',
    duration: '60 minutes',
    type: 'premium',
    price: 8.99,
    originalPrice: 12.99,
    rating: 4.8,
    reviewCount: 127,
    downloadCount: 892,
    createdDate: '2 weeks ago',
    updatedDate: '1 week ago',
    previewImages: ['/api/placeholder/300/200', '/api/placeholder/300/200'],
    tags: ['Fractions', 'Hands-on', 'Food-based Learning', 'Visual'],
    standards: ['3.NF.A.1', '3.NF.A.2', '4.NF.A.1'],
    materials: ['Paper plates', 'Construction paper', 'Scissors', 'Glue', 'Fraction manipulatives'],
    difficulty: 'Intermediate',
    features: [
      'Complete lesson plan with timing',
      'Student worksheets (PDF)',
      'Assessment rubric',
      'Extension activities',
      'Parent take-home note'
    ],
    isFeatured: true,
    isNew: false,
    category: 'lesson-plan'
  },
  {
    id: '2',
    title: 'Solar System Virtual Field Trip',
    description: 'Take your students on an immersive journey through our solar system using AR/VR technology and interactive simulations.',
    creator: mockCreators[1],
    subject: 'Science',
    grade: '5th-6th',
    duration: '90 minutes',
    type: 'free',
    rating: 4.6,
    reviewCount: 203,
    downloadCount: 1445,
    createdDate: '1 month ago',
    updatedDate: '3 days ago',
    previewImages: ['/api/placeholder/300/200'],
    tags: ['Solar System', 'Technology', 'VR/AR', 'Space'],
    standards: ['5-ESS1-1', '5-ESS1-2'],
    materials: ['Tablets/computers', 'VR headsets (optional)', 'Printed planet cards'],
    difficulty: 'Intermediate',
    features: [
      'Interactive presentation slides',
      'Virtual reality component',
      'Student observation sheets',
      'Pre/post assessments',
      'Technology setup guide'
    ],
    isFeatured: false,
    isNew: true,
    category: 'lesson-plan'
  }
];

const mockReviews: Review[] = [
  {
    id: '1',
    user: {
      name: 'Jennifer Smith',
      avatar: '/api/placeholder/32/32',
      title: '3rd Grade Teacher'
    },
    rating: 5,
    comment: 'This lesson was absolutely fantastic! My students were so engaged and finally understood equivalent fractions. The materials list was perfect and everything was well-organized.',
    date: '1 week ago',
    isVerifiedPurchase: true
  },
  {
    id: '2',
    user: {
      name: 'Michael Chang',
      avatar: '/api/placeholder/32/32',
      title: '4th Grade Teacher'
    },
    rating: 4,
    comment: 'Great lesson plan! I adapted it slightly for my 4th graders and it worked wonderfully. The visual elements really helped my visual learners.',
    date: '2 weeks ago',
    isVerifiedPurchase: true
  }
];

interface LessonSharingMarketplaceProps {
  className?: string;
}

export function LessonSharingMarketplace({ className = '' }: LessonSharingMarketplaceProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<SharedLesson | null>(null);

  const subjects = ['Mathematics', 'Science', 'English Language Arts', 'Social Studies', 'Art', 'Physical Education'];
  const grades = ['K', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

  const filteredLessons = mockLessons.filter(lesson => {
    const matchesSearch = !searchTerm || 
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSubject = !selectedSubject || lesson.subject === selectedSubject;
    const matchesGrade = !selectedGrade || lesson.grade.includes(selectedGrade);
    const matchesType = !selectedType || lesson.type === selectedType;
    
    return matchesSearch && matchesSubject && matchesGrade && matchesType;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'lesson-plan': return <BookOpen className="w-4 h-4" />;
      case 'activity': return <Users className="w-4 h-4" />;
      case 'assessment': return <Target className="w-4 h-4" />;
      case 'resource': return <FileText className="w-4 h-4" />;
      case 'template': return <Presentation className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Store className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Lesson Marketplace</h2>
          </div>
          <p className="text-muted-foreground">
            Discover, share, and access high-quality lesson plans created by educators
          </p>
        </div>
        
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Share a Lesson
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search lessons, activities, and resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All subjects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All subjects</SelectItem>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All grades</SelectItem>
                  {grades.map(grade => (
                    <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All types</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="ml-auto"
            >
              <Filter className="w-4 h-4 mr-2" />
              More Filters
              {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="pt-4 border-t space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Difficulty</Label>
                  <div className="space-y-2">
                    {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox id={level} />
                        <Label htmlFor={level} className="text-sm">{level}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium mb-2 block">Duration</Label>
                  <div className="space-y-2">
                    {['< 30 min', '30-60 min', '60+ min'].map(duration => (
                      <div key={duration} className="flex items-center space-x-2">
                        <Checkbox id={duration} />
                        <Label htmlFor={duration} className="text-sm">{duration}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium mb-2 block">Features</Label>
                  <div className="space-y-2">
                    {['Assessment included', 'Standards aligned', 'Materials list'].map(feature => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox id={feature} />
                        <Label htmlFor={feature} className="text-sm">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium mb-2 block">Sort by</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredLessons.length} results
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            <Gift className="w-3 h-3 mr-1" />
            {mockLessons.filter(l => l.type === 'free').length} Free Resources
          </Badge>
          <Badge variant="outline">
            <Star className="w-3 h-3 mr-1" />
            {mockLessons.filter(l => l.isFeatured).length} Featured
          </Badge>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map(lesson => (
          <Card 
            key={lesson.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => setSelectedLesson(lesson)}
          >
            <div className="relative">
              {/* Preview Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg relative overflow-hidden">
                {lesson.previewImages[0] && (
                  <img 
                    src={lesson.previewImages[0]} 
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                )}
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {lesson.isFeatured && (
                    <Badge className="bg-yellow-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  {lesson.isNew && (
                    <Badge className="bg-green-500 text-white">New</Badge>
                  )}
                  {lesson.type === 'free' && (
                    <Badge className="bg-blue-500 text-white">
                      <Gift className="w-3 h-3 mr-1" />
                      Free
                    </Badge>
                  )}
                </div>

                {/* Type Badge */}
                <div className="absolute top-2 right-2">
                  <Badge className={getDifficultyColor(lesson.difficulty)}>
                    {lesson.difficulty}
                  </Badge>
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-1">
                    <Button size="sm" variant="secondary" onClick={(e) => e.stopPropagation()}>
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" onClick={(e) => e.stopPropagation()}>
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="pt-4">
                <div className="space-y-3">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(lesson.category)}
                      <Badge variant="outline" className="text-xs">
                        {lesson.subject} • {lesson.grade}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg line-clamp-2">{lesson.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{lesson.description}</p>
                  </div>

                  {/* Creator Info */}
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={lesson.creator.avatar} />
                      <AvatarFallback className="text-xs">
                        {lesson.creator.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{lesson.creator.name}</span>
                    {lesson.creator.isVerified && (
                      <Verified className="w-4 h-4 text-blue-600" />
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {lesson.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {lesson.downloadCount}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lesson.duration}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      {lesson.type === 'premium' ? (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-lg">${lesson.price}</span>
                          {lesson.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${lesson.originalPrice}
                            </span>
                          )}
                        </div>
                      ) : (
                        <Badge className="bg-green-100 text-green-800">Free</Badge>
                      )}
                    </div>
                    
                    <Button size="sm">
                      {lesson.type === 'premium' ? 'Purchase' : 'Download'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Lesson Detail Modal */}
      {selectedLesson && (
        <Dialog open={!!selectedLesson} onOpenChange={() => setSelectedLesson(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedLesson.title}</DialogTitle>
              <DialogDescription>
                By {selectedLesson.creator.name} • {selectedLesson.subject} • {selectedLesson.grade}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Preview Images */}
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={selectedLesson.previewImages[0]} 
                    alt={selectedLesson.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedLesson.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold mb-3">What's Included</h3>
                  <ul className="space-y-2">
                    {selectedLesson.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Standards */}
                {selectedLesson.standards.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-3">Standards Alignment</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedLesson.standards.map(standard => (
                        <Badge key={standard} variant="outline">{standard}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Materials */}
                <div>
                  <h3 className="font-semibold mb-3">Materials Needed</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedLesson.materials.map(material => (
                      <Badge key={material} variant="secondary">{material}</Badge>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div>
                  <h3 className="font-semibold mb-3">Reviews ({selectedLesson.reviewCount})</h3>
                  <div className="space-y-4">
                    {mockReviews.map(review => (
                      <div key={review.id} className="border-b pb-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={review.user.avatar} />
                            <AvatarFallback>
                              {review.user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{review.user.name}</span>
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              {review.isVerifiedPurchase && (
                                <Badge variant="outline" className="text-xs">Verified Purchase</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{review.user.title}</p>
                            <p className="text-sm">{review.comment}</p>
                            <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Purchase Card */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {/* Price */}
                      <div className="text-center">
                        {selectedLesson.type === 'premium' ? (
                          <div>
                            <div className="text-3xl font-bold">${selectedLesson.price}</div>
                            {selectedLesson.originalPrice && (
                              <div className="text-sm text-muted-foreground line-through">
                                ${selectedLesson.originalPrice}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-2xl font-bold text-green-600">Free</div>
                        )}
                      </div>

                      {/* Action Button */}
                      <Button className="w-full" size="lg">
                        <Download className="w-4 h-4 mr-2" />
                        {selectedLesson.type === 'premium' ? 'Purchase Now' : 'Download Free'}
                      </Button>

                      {/* Secondary Actions */}
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="w-4 h-4 mr-1" />
                          Save
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Creator Info */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={selectedLesson.creator.avatar} />
                          <AvatarFallback>
                            {selectedLesson.creator.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{selectedLesson.creator.name}</h4>
                            {selectedLesson.creator.isVerified && (
                              <Verified className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{selectedLesson.creator.title}</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Rating:</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {selectedLesson.creator.rating}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Sales:</span>
                          <span>{selectedLesson.creator.totalSales}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Joined:</span>
                          <span>{selectedLesson.creator.joinedDate}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Specialties:</p>
                        <div className="flex flex-wrap gap-1">
                          {selectedLesson.creator.specialties.map(specialty => (
                            <Badge key={specialty} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Lesson Details */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{selectedLesson.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Difficulty:</span>
                        <Badge className={getDifficultyColor(selectedLesson.difficulty)} variant="secondary">
                          {selectedLesson.difficulty}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Downloads:</span>
                        <span>{selectedLesson.downloadCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Created:</span>
                        <span>{selectedLesson.createdDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Updated:</span>
                        <span>{selectedLesson.updatedDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}