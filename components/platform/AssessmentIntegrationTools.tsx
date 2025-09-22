'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  Target, 
  Plus, 
  FileText, 
  BarChart3, 
  Users, 
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Download,
  Share2,
  Eye,
  Settings,
  Zap,
  BookOpen,
  GraduationCap,
  Award,
  Star,
  MessageCircle,
  Calendar,
  Filter,
  Search,
  Edit,
  Trash2,
  Copy,
  ExternalLink
} from 'lucide-react';

interface Assessment {
  id: string;
  title: string;
  type: 'quiz' | 'test' | 'project' | 'rubric' | 'checklist';
  subject: string;
  grade: string;
  standards: string[];
  createdDate: string;
  lastUsed?: string;
  studentsAssessed: number;
  averageScore: number;
  questions: AssessmentQuestion[];
  rubrics?: Rubric[];
  isTemplate: boolean;
  isShared: boolean;
  downloads?: number;
  rating?: number;
}

interface AssessmentQuestion {
  id: string;
  type: 'multiple-choice' | 'short-answer' | 'essay' | 'true-false' | 'matching';
  question: string;
  points: number;
  options?: string[];
  correctAnswer?: string | string[];
  rubric?: string;
  standard?: string;
}

interface Rubric {
  id: string;
  title: string;
  criteria: RubricCriterion[];
  scale: 'numeric' | 'descriptive';
  maxScore: number;
}

interface RubricCriterion {
  id: string;
  name: string;
  description: string;
  levels: RubricLevel[];
}

interface RubricLevel {
  score: number;
  label: string;
  description: string;
}

interface GradingIntegration {
  id: string;
  name: string;
  type: 'google-classroom' | 'canvas' | 'schoology' | 'blackboard' | 'moodle';
  icon: string;
  status: 'connected' | 'disconnected' | 'error';
  lastSync?: string;
  studentsCount?: number;
  classesCount?: number;
}

// Mock data
const mockAssessments: Assessment[] = [
  {
    id: '1',
    title: 'Fractions Unit Test',
    type: 'test',
    subject: 'Mathematics',
    grade: '3rd',
    standards: ['3.NF.A.1', '3.NF.A.2', '3.NF.A.3'],
    createdDate: '2 weeks ago',
    lastUsed: '3 days ago',
    studentsAssessed: 24,
    averageScore: 87,
    questions: [
      {
        id: '1',
        type: 'multiple-choice',
        question: 'Which fraction represents one half?',
        points: 2,
        options: ['1/2', '1/3', '2/4', 'Both A and C'],
        correctAnswer: 'Both A and C',
        standard: '3.NF.A.1'
      }
    ],
    isTemplate: false,
    isShared: true,
    downloads: 156,
    rating: 4.7
  },
  {
    id: '2',
    title: 'Science Fair Project Rubric',
    type: 'rubric',
    subject: 'Science',
    grade: '5th',
    standards: ['5-ETS1-1', '5-ETS1-2'],
    createdDate: '1 month ago',
    lastUsed: '1 week ago',
    studentsAssessed: 28,
    averageScore: 82,
    questions: [],
    rubrics: [
      {
        id: '1',
        title: 'Science Fair Project',
        scale: 'numeric',
        maxScore: 100,
        criteria: [
          {
            id: '1',
            name: 'Scientific Method',
            description: 'Use of scientific method and procedures',
            levels: [
              { score: 4, label: 'Excellent', description: 'Clearly follows all steps of scientific method' },
              { score: 3, label: 'Good', description: 'Follows most steps with minor gaps' },
              { score: 2, label: 'Satisfactory', description: 'Follows some steps but missing key elements' },
              { score: 1, label: 'Needs Improvement', description: 'Little evidence of scientific method' }
            ]
          }
        ]
      }
    ],
    isTemplate: true,
    isShared: true,
    downloads: 89,
    rating: 4.9
  }
];

const mockIntegrations: GradingIntegration[] = [
  {
    id: '1',
    name: 'Google Classroom',
    type: 'google-classroom',
    icon: '📚',
    status: 'connected',
    lastSync: '2 hours ago',
    studentsCount: 125,
    classesCount: 5
  },
  {
    id: '2',
    name: 'Canvas',
    type: 'canvas',
    icon: '🎨',
    status: 'disconnected'
  },
  {
    id: '3',
    name: 'Schoology',
    type: 'schoology',
    icon: '🏫',
    status: 'error',
    lastSync: '3 days ago'
  }
];

interface AssessmentIntegrationToolsProps {
  className?: string;
}

export function AssessmentIntegrationTools({ className = '' }: AssessmentIntegrationToolsProps) {
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [assessmentType, setAssessmentType] = useState<'quiz' | 'test' | 'project' | 'rubric' | 'checklist'>('quiz');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('');

  const filteredAssessments = mockAssessments.filter(assessment => {
    const matchesSearch = !searchTerm || 
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSubject = !filterSubject || assessment.subject === filterSubject;
    
    return matchesSearch && matchesSubject;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'quiz': return <FileText className="w-4 h-4" />;
      case 'test': return <BookOpen className="w-4 h-4" />;
      case 'project': return <Target className="w-4 h-4" />;
      case 'rubric': return <BarChart3 className="w-4 h-4" />;
      case 'checklist': return <CheckCircle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'quiz': return 'bg-blue-100 text-blue-800';
      case 'test': return 'bg-purple-100 text-purple-800';
      case 'project': return 'bg-green-100 text-green-800';
      case 'rubric': return 'bg-orange-100 text-orange-800';
      case 'checklist': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-800 border-green-200';
      case 'disconnected': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'error': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Assessment & Grading Hub</h2>
          </div>
          <p className="text-muted-foreground">
            Create, manage, and integrate assessments with your grading systems
          </p>
        </div>
        
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Assessment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Assessment</DialogTitle>
              <DialogDescription>
                Choose the type of assessment you'd like to create
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-3 block">Assessment Type</Label>
                <RadioGroup value={assessmentType} onValueChange={(value: any) => setAssessmentType(value)}>
                  <div className="space-y-2">
                    {[
                      { id: 'quiz', label: 'Quiz', description: 'Quick formative assessment' },
                      { id: 'test', label: 'Test', description: 'Formal summative assessment' },
                      { id: 'project', label: 'Project', description: 'Performance-based assessment' },
                      { id: 'rubric', label: 'Rubric', description: 'Scoring guide for qualitative assessment' },
                      { id: 'checklist', label: 'Checklist', description: 'Simple completion tracking' }
                    ].map(type => (
                      <div key={type.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={type.id} id={type.id} />
                        <Label htmlFor={type.id} className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(type.id)}
                            <span className="font-medium">{type.label}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="ela">English Language Arts</SelectItem>
                      <SelectItem value="social">Social Studies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="grade">Grade Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="k">Kindergarten</SelectItem>
                      <SelectItem value="1">1st Grade</SelectItem>
                      <SelectItem value="2">2nd Grade</SelectItem>
                      <SelectItem value="3">3rd Grade</SelectItem>
                      <SelectItem value="4">4th Grade</SelectItem>
                      <SelectItem value="5">5th Grade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="title">Assessment Title</Label>
                <Input placeholder="Enter assessment title" />
              </div>
              
              <Button className="w-full" onClick={() => setShowCreateDialog(false)}>
                Create Assessment
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="assessments" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="assessments">My Assessments</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* My Assessments */}
        <TabsContent value="assessments" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search assessments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={filterSubject} onValueChange={setFilterSubject}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All subjects" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All subjects</SelectItem>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Assessments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssessments.map(assessment => (
              <Card 
                key={assessment.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedAssessment(assessment)}
              >
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className={getTypeColor(assessment.type)}>
                          {getTypeIcon(assessment.type)}
                          <span className="ml-1 capitalize">{assessment.type}</span>
                        </Badge>
                        {assessment.isTemplate && (
                          <Badge variant="outline">Template</Badge>
                        )}
                        {assessment.isShared && (
                          <Badge variant="secondary">Shared</Badge>
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-lg">{assessment.title}</h3>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{assessment.subject}</span>
                        <span>•</span>
                        <span>{assessment.grade}</span>
                      </div>
                    </div>

                    {/* Standards */}
                    {assessment.standards.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-1">Standards:</p>
                        <div className="flex flex-wrap gap-1">
                          {assessment.standards.slice(0, 3).map(standard => (
                            <Badge key={standard} variant="outline" className="text-xs">
                              {standard}
                            </Badge>
                          ))}
                          {assessment.standards.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{assessment.standards.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold">{assessment.studentsAssessed}</div>
                        <div className="text-xs text-muted-foreground">Students</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{assessment.averageScore}%</div>
                        <div className="text-xs text-muted-foreground">Avg Score</div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>Created: {assessment.createdDate}</div>
                      {assessment.lastUsed && (
                        <div>Last used: {assessment.lastUsed}</div>
                      )}
                    </div>

                    {/* Shared Assessment Stats */}
                    {assessment.isShared && assessment.downloads && (
                      <div className="flex items-center justify-between text-sm pt-2 border-t">
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {assessment.downloads} downloads
                        </div>
                        {assessment.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {assessment.rating}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Copy className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Templates */}
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Templates</CardTitle>
              <CardDescription>
                Ready-to-use assessment templates from the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <p>Browse hundreds of teacher-created assessment templates</p>
                <Button className="mt-4">
                  Browse Templates
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Grading System Integrations
              </CardTitle>
              <CardDescription>
                Connect your assessments with external grading platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockIntegrations.map(integration => (
                  <div key={integration.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{integration.icon}</div>
                      <div>
                        <h3 className="font-medium">{integration.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getStatusColor(integration.status)} variant="outline">
                            {integration.status === 'connected' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {integration.status === 'error' && <AlertTriangle className="w-3 h-3 mr-1" />}
                            {integration.status.charAt(0).toUpperCase() + integration.status.slice(1)}
                          </Badge>
                          {integration.lastSync && (
                            <span className="text-sm text-muted-foreground">
                              Last sync: {integration.lastSync}
                            </span>
                          )}
                        </div>
                        {integration.status === 'connected' && integration.studentsCount && (
                          <div className="text-sm text-muted-foreground mt-1">
                            {integration.studentsCount} students • {integration.classesCount} classes
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {integration.status === 'connected' ? (
                        <>
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4 mr-1" />
                            Configure
                          </Button>
                          <Button variant="outline" size="sm">
                            Sync Now
                          </Button>
                        </>
                      ) : (
                        <Button size="sm">
                          {integration.status === 'error' ? 'Reconnect' : 'Connect'}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Export Options */}
          <Card>
            <CardHeader>
              <CardTitle>Export & Import</CardTitle>
              <CardDescription>
                Export assessments or import from other systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h4 className="font-medium">Export Formats</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Export as PDF
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Export as Word Document
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Export as CSV
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Import Sources</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Import from Google Forms
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Import from Kahoot
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Import from Quizizz
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Assessments</span>
                  </div>
                  <div className="text-2xl font-bold">23</div>
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
                  <div className="text-2xl font-bold">342</div>
                  <p className="text-xs text-muted-foreground">Total assessed</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium">Avg Score</span>
                  </div>
                  <div className="text-2xl font-bold">84%</div>
                  <p className="text-xs text-muted-foreground">Across all assessments</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium">Time Saved</span>
                  </div>
                  <div className="text-2xl font-bold">45h</div>
                  <p className="text-xs text-muted-foreground">Through automation</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Performance Trends
              </CardTitle>
              <CardDescription>
                Student performance across different subjects and time periods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                <p>Performance analytics and trends will be displayed here</p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Assessment Results */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Assessment Results</CardTitle>
              <CardDescription>
                Overview of your latest assessment outcomes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAssessments.slice(0, 3).map(assessment => (
                  <div key={assessment.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{assessment.title}</h4>
                      <div className="text-sm text-muted-foreground">
                        {assessment.subject} • {assessment.grade} • {assessment.lastUsed}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">{assessment.averageScore}%</div>
                      <div className="text-sm text-muted-foreground">
                        {assessment.studentsAssessed} students
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