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
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Mail, 
  Plus, 
  Search, 
  Filter, 
  MessageSquare, 
  Phone,
  Calendar,
  FileText,
  Send,
  Edit,
  Copy,
  Star,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle,
  Heart,
  Smile,
  Award,
  BookOpen,
  TrendingUp,
  Home,
  Zap,
  Download,
  Share2,
  Eye,
  MessageCircle
} from 'lucide-react';

interface CommunicationTemplate {
  id: string;
  title: string;
  category: 'academic' | 'behavioral' | 'attendance' | 'general' | 'positive' | 'concern';
  type: 'email' | 'note' | 'call-script' | 'conference';
  subject?: string;
  content: string;
  placeholders: string[];
  language: string;
  grade: string;
  tags: string[];
  isShared: boolean;
  rating?: number;
  downloads?: number;
  createdBy?: string;
  lastUsed?: string;
  tone: 'formal' | 'friendly' | 'urgent' | 'encouraging';
}

interface ParentContact {
  id: string;
  studentName: string;
  parentName: string;
  email: string;
  phone?: string;
  preferredContact: 'email' | 'phone' | 'both';
  language: string;
  lastContact?: string;
}

interface CommunicationHistory {
  id: string;
  studentName: string;
  parentName: string;
  type: 'email' | 'call' | 'meeting' | 'note';
  subject: string;
  summary: string;
  date: string;
  response?: string;
  followUpNeeded?: boolean;
}

// Mock data
const mockTemplates: CommunicationTemplate[] = [
  {
    id: '1',
    title: 'Weekly Progress Update',
    category: 'academic',
    type: 'email',
    subject: 'Weekly Update for {studentName} - Week of {date}',
    content: `Dear {parentName},

I hope this message finds you well. I wanted to share {studentName}'s progress from this week.

**Academic Highlights:**
• {academicHighlight1}
• {academicHighlight2}

**Areas of Growth:**
• {growthArea1}
• {growthArea2}

**Upcoming:**
• {upcomingAssignment}
• {upcomingEvent}

Please don't hesitate to reach out if you have any questions or concerns.

Best regards,
{teacherName}`,
    placeholders: ['studentName', 'parentName', 'date', 'academicHighlight1', 'academicHighlight2', 'growthArea1', 'growthArea2', 'upcomingAssignment', 'upcomingEvent', 'teacherName'],
    language: 'English',
    grade: 'K-12',
    tags: ['weekly', 'progress', 'update', 'academic'],
    isShared: true,
    rating: 4.8,
    downloads: 456,
    createdBy: 'Mrs. Johnson',
    lastUsed: '2 days ago',
    tone: 'friendly'
  },
  {
    id: '2',
    title: 'Positive Behavior Recognition',
    category: 'positive',
    type: 'note',
    content: `Dear {parentName},

I wanted to take a moment to share some wonderful news about {studentName}!

Today, {studentName} demonstrated exceptional {behavior} by {specificExample}. This shows great {character} and I am so proud of their growth in this area.

{studentName} should be very proud of themselves, and I hope you will celebrate this achievement together at home.

Keep up the fantastic work, {studentName}!

With appreciation,
{teacherName}`,
    placeholders: ['parentName', 'studentName', 'behavior', 'specificExample', 'character', 'teacherName'],
    language: 'English',
    grade: 'K-8',
    tags: ['positive', 'behavior', 'recognition', 'celebration'],
    isShared: true,
    rating: 4.9,
    downloads: 789,
    createdBy: 'Mr. Smith',
    lastUsed: '1 week ago',
    tone: 'encouraging'
  },
  {
    id: '3',
    title: 'Conference Request',
    category: 'general',
    type: 'email',
    subject: 'Conference Request for {studentName}',
    content: `Dear {parentName},

I hope you are doing well. I would like to schedule a conference to discuss {studentName}'s progress and how we can work together to support their continued growth.

**Purpose of Meeting:**
• {purpose1}
• {purpose2}

**Available Times:**
• {timeOption1}
• {timeOption2}
• {timeOption3}

Please let me know which time works best for you, or if you would prefer a different time. The meeting can be held in person, over the phone, or via video call - whatever is most convenient for you.

I look forward to our conversation.

Best regards,
{teacherName}
{contactInfo}`,
    placeholders: ['parentName', 'studentName', 'purpose1', 'purpose2', 'timeOption1', 'timeOption2', 'timeOption3', 'teacherName', 'contactInfo'],
    language: 'English',
    grade: 'K-12',
    tags: ['conference', 'meeting', 'parent-teacher', 'scheduling'],
    isShared: true,
    rating: 4.6,
    downloads: 234,
    createdBy: 'Ms. Davis',
    tone: 'formal'
  },
  {
    id: '4',
    title: 'Assignment Reminder',
    category: 'academic',
    type: 'email',
    subject: 'Gentle Reminder: {assignmentName} Due {dueDate}',
    content: `Hello {parentName},

I hope you're having a great {dayOfWeek}! I wanted to send a gentle reminder that {studentName} has an upcoming assignment.

**Assignment Details:**
• Name: {assignmentName}
• Due Date: {dueDate}
• Description: {assignmentDescription}

{studentName} has been working hard in class, and I believe they can do wonderful work on this assignment. If they need any additional support or clarification, please encourage them to ask me during class or {officeHours}.

Thank you for supporting {studentName}'s education!

Warm regards,
{teacherName}`,
    placeholders: ['parentName', 'dayOfWeek', 'studentName', 'assignmentName', 'dueDate', 'assignmentDescription', 'officeHours', 'teacherName'],
    language: 'English',
    grade: 'K-12',
    tags: ['assignment', 'reminder', 'deadline', 'support'],
    isShared: true,
    rating: 4.5,
    downloads: 345,
    createdBy: 'Mrs. Garcia',
    tone: 'friendly'
  }
];

const mockContacts: ParentContact[] = [
  {
    id: '1',
    studentName: 'Emma Thompson',
    parentName: 'Sarah Thompson',
    email: 'sarah.thompson@email.com',
    phone: '(555) 123-4567',
    preferredContact: 'email',
    language: 'English',
    lastContact: '3 days ago'
  },
  {
    id: '2',
    studentName: 'Miguel Rodriguez',
    parentName: 'Carlos Rodriguez',
    email: 'c.rodriguez@email.com',
    phone: '(555) 987-6543',
    preferredContact: 'both',
    language: 'Spanish',
    lastContact: '1 week ago'
  }
];

const mockHistory: CommunicationHistory[] = [
  {
    id: '1',
    studentName: 'Emma Thompson',
    parentName: 'Sarah Thompson',
    type: 'email',
    subject: 'Weekly Progress Update',
    summary: 'Shared Emma\'s excellent progress in math and upcoming science project',
    date: '3 days ago',
    response: 'Thank you for the update! We\'re so proud of Emma.',
    followUpNeeded: false
  },
  {
    id: '2',
    studentName: 'Miguel Rodriguez',
    parentName: 'Carlos Rodriguez',
    type: 'call',
    subject: 'Reading Support Discussion',
    summary: 'Discussed strategies to support Miguel\'s reading at home',
    date: '1 week ago',
    followUpNeeded: true
  }
];

interface ParentCommunicationTemplatesProps {
  className?: string;
}

export function ParentCommunicationTemplates({ className = '' }: ParentCommunicationTemplatesProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<CommunicationTemplate | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterType, setFilterType] = useState('');
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showSendDialog, setShowSendDialog] = useState(false);

  const filteredTemplates = mockTemplates.filter(template => {
    const matchesSearch = !searchTerm || 
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !filterCategory || template.category === filterCategory;
    const matchesType = !filterType || template.type === filterType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic': return <BookOpen className="w-4 h-4" />;
      case 'behavioral': return <Users className="w-4 h-4" />;
      case 'attendance': return <Calendar className="w-4 h-4" />;
      case 'general': return <MessageSquare className="w-4 h-4" />;
      case 'positive': return <Heart className="w-4 h-4" />;
      case 'concern': return <AlertTriangle className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'behavioral': return 'bg-purple-100 text-purple-800';
      case 'attendance': return 'bg-orange-100 text-orange-800';
      case 'general': return 'bg-gray-100 text-gray-800';
      case 'positive': return 'bg-green-100 text-green-800';
      case 'concern': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getToneIcon = (tone: string) => {
    switch (tone) {
      case 'formal': return '🎩';
      case 'friendly': return '😊';
      case 'urgent': return '⚡';
      case 'encouraging': return '🌟';
      default: return '💬';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail className="w-4 h-4" />;
      case 'note': return <FileText className="w-4 h-4" />;
      case 'call-script': return <Phone className="w-4 h-4" />;
      case 'conference': return <Calendar className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Parent Communication Hub</h2>
          </div>
          <p className="text-muted-foreground">
            Streamline parent communication with templates, tracking, and automation
          </p>
        </div>
        
        <div className="flex gap-2">
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Create Template
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Create Communication Template</DialogTitle>
                <DialogDescription>
                  Build a reusable template for parent communication
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="template-title">Template Title</Label>
                  <Input placeholder="Enter template title" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="behavioral">Behavioral</SelectItem>
                        <SelectItem value="attendance">Attendance</SelectItem>
                        <SelectItem value="positive">Positive</SelectItem>
                        <SelectItem value="concern">Concern</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="note">Note</SelectItem>
                        <SelectItem value="call-script">Call Script</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label>Subject Line (for emails)</Label>
                  <Input placeholder="Enter subject line" />
                </div>
                
                <div>
                  <Label>Message Content</Label>
                  <Textarea 
                    placeholder="Enter your template content. Use {placeholders} for dynamic content."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full">
                  Create Template
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </div>
      </div>

      <Tabs defaultValue="templates" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Templates */}
        <TabsContent value="templates" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search templates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All categories</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="behavioral">Behavioral</SelectItem>
                    <SelectItem value="attendance">Attendance</SelectItem>
                    <SelectItem value="positive">Positive</SelectItem>
                    <SelectItem value="concern">Concern</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All types</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="note">Note</SelectItem>
                    <SelectItem value="call-script">Call Script</SelectItem>
                    <SelectItem value="conference">Conference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTemplates.map(template => (
              <Card 
                key={template.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedTemplate(template)}
              >
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(template.category)}>
                          {getCategoryIcon(template.category)}
                          <span className="ml-1 capitalize">{template.category}</span>
                        </Badge>
                        <Badge variant="outline">
                          {getTypeIcon(template.type)}
                          <span className="ml-1 capitalize">{template.type.replace('-', ' ')}</span>
                        </Badge>
                        <div className="text-lg">{getToneIcon(template.tone)}</div>
                      </div>
                      
                      <h3 className="font-semibold text-lg">{template.title}</h3>
                      
                      {template.subject && (
                        <p className="text-sm text-muted-foreground italic">
                          Subject: {template.subject}
                        </p>
                      )}
                    </div>

                    {/* Content Preview */}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm line-clamp-3">
                        {template.content}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {template.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {template.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{template.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-muted-foreground">
                        {template.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {template.rating}
                          </div>
                        )}
                        {template.downloads && (
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {template.downloads}
                          </div>
                        )}
                        {template.lastUsed && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {template.lastUsed}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Send className="w-3 h-3 mr-1" />
                        Use Template
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Template Detail Modal */}
          {selectedTemplate && (
            <Dialog open={!!selectedTemplate} onOpenChange={() => setSelectedTemplate(null)}>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    {selectedTemplate.title}
                    <div className="text-lg">{getToneIcon(selectedTemplate.tone)}</div>
                  </DialogTitle>
                  <DialogDescription className="flex items-center gap-2">
                    <Badge className={getCategoryColor(selectedTemplate.category)}>
                      {getCategoryIcon(selectedTemplate.category)}
                      <span className="ml-1 capitalize">{selectedTemplate.category}</span>
                    </Badge>
                    <Badge variant="outline">
                      {getTypeIcon(selectedTemplate.type)}
                      <span className="ml-1 capitalize">{selectedTemplate.type.replace('-', ' ')}</span>
                    </Badge>
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  {selectedTemplate.subject && (
                    <div>
                      <Label className="font-medium">Subject Line</Label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                        {selectedTemplate.subject}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <Label className="font-medium">Message Content</Label>
                    <ScrollArea className="h-64 mt-1 p-3 bg-gray-50 rounded-lg">
                      <pre className="whitespace-pre-wrap text-sm">
                        {selectedTemplate.content}
                      </pre>
                    </ScrollArea>
                  </div>
                  
                  <div>
                    <Label className="font-medium">Available Placeholders</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedTemplate.placeholders.map(placeholder => (
                        <Badge key={placeholder} variant="outline" className="font-mono">
                          {'{' + placeholder + '}'}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-medium">Tags</Label>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {selectedTemplate.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="font-medium">Details</Label>
                      <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                        <div>Language: {selectedTemplate.language}</div>
                        <div>Grade: {selectedTemplate.grade}</div>
                        {selectedTemplate.createdBy && (
                          <div>Created by: {selectedTemplate.createdBy}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Send className="w-4 h-4 mr-2" />
                      Use This Template
                    </Button>
                    <Button variant="outline">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline">
                      <Copy className="w-4 h-4 mr-2" />
                      Duplicate
                    </Button>
                    <Button variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </TabsContent>

        {/* Contacts */}
        <TabsContent value="contacts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Parent Contacts
              </CardTitle>
              <CardDescription>
                Manage your parent contact information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockContacts.map(contact => (
                  <div key={contact.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{contact.parentName}</h4>
                      <p className="text-sm text-muted-foreground">
                        Parent of {contact.studentName}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {contact.email}
                        </div>
                        {contact.phone && (
                          <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {contact.phone}
                          </div>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {contact.language}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Prefers {contact.preferredContact}
                        </Badge>
                      </div>
                      {contact.lastContact && (
                        <p className="text-xs text-muted-foreground">
                          Last contact: {contact.lastContact}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History */}
        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Communication History
              </CardTitle>
              <CardDescription>
                Track your parent communication and follow-ups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockHistory.map(record => (
                  <div key={record.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {getTypeIcon(record.type)}
                          <h4 className="font-medium">{record.subject}</h4>
                          {record.followUpNeeded && (
                            <Badge variant="destructive" className="text-xs">
                              Follow-up needed
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {record.parentName} • {record.studentName} • {record.date}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-3">{record.summary}</p>
                    
                    {record.response && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">Parent Response:</p>
                        <p className="text-sm italic">"{record.response}"</p>
                      </div>
                    )}
                  </div>
                ))}
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
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Messages Sent</span>
                  </div>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">Response Rate</span>
                  </div>
                  <div className="text-2xl font-bold">89%</div>
                  <p className="text-xs text-muted-foreground">Average</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium">Positive</span>
                  </div>
                  <div className="text-2xl font-bold">73%</div>
                  <p className="text-xs text-muted-foreground">Communication tone</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium">Avg Response</span>
                  </div>
                  <div className="text-2xl font-bold">4.2h</div>
                  <p className="text-xs text-muted-foreground">Response time</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Communication Trends</CardTitle>
              <CardDescription>
                Your parent communication patterns over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                <p>Communication analytics and trends will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}