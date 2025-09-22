'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { 
  Search, 
  BookOpen, 
  Target, 
  GraduationCap, 
  CheckCircle, 
  Plus,
  Filter,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';

interface Standard {
  id: string;
  code: string;
  title: string;
  description: string;
  grade: string;
  subject: string;
  domain: string;
  cluster?: string;
  alignedLessons: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  isSelected?: boolean;
}

interface StandardsSet {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  standards: Standard[];
}

// Mock data - in real implementation, this would come from API
const standardsSets: StandardsSet[] = [
  {
    id: 'ccss',
    name: 'Common Core State Standards',
    abbreviation: 'CCSS',
    description: 'Mathematics and English Language Arts standards',
    standards: [
      {
        id: 'ccss-math-k-cc-1',
        code: 'K.CC.A.1',
        title: 'Count to 100 by ones and by tens',
        description: 'Count to 100 by ones and by tens. Count forward beginning from a given number within the known sequence.',
        grade: 'K',
        subject: 'Mathematics',
        domain: 'Counting and Cardinality',
        cluster: 'Know number names and the count sequence',
        alignedLessons: 45,
        difficulty: 'Beginner'
      },
      {
        id: 'ccss-ela-1-rf-3',
        code: '1.RF.3',
        title: 'Know and apply grade-level phonics and word analysis skills',
        description: 'Know and apply grade-level phonics and word analysis skills in decoding words.',
        grade: '1',
        subject: 'English Language Arts',
        domain: 'Reading: Foundational Skills',
        cluster: 'Phonics and Word Recognition',
        alignedLessons: 78,
        difficulty: 'Beginner'
      },
      {
        id: 'ccss-math-3-oa-8',
        code: '3.OA.D.8',
        title: 'Solve two-step word problems',
        description: 'Solve two-step word problems using the four operations. Represent these problems using equations with a letter standing for the unknown quantity.',
        grade: '3',
        subject: 'Mathematics',
        domain: 'Operations and Algebraic Thinking',
        cluster: 'Solve problems involving the four operations',
        alignedLessons: 32,
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'ngss',
    name: 'Next Generation Science Standards',
    abbreviation: 'NGSS',
    description: 'K-12 science standards emphasizing engineering practices',
    standards: [
      {
        id: 'ngss-k-ps2-1',
        code: 'K-PS2-1',
        title: 'Simple pushes and pulls',
        description: 'Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object.',
        grade: 'K',
        subject: 'Science',
        domain: 'Physical Science',
        alignedLessons: 23,
        difficulty: 'Beginner'
      },
      {
        id: 'ngss-5-ls2-1',
        code: '5-LS2-1',
        title: 'Food webs and ecosystems',
        description: 'Develop a model to describe the movement of matter among plants, animals, decomposers, and the environment.',
        grade: '5',
        subject: 'Science',
        domain: 'Life Science',
        alignedLessons: 18,
        difficulty: 'Intermediate'
      }
    ]
  }
];

const grades = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const subjects = ['Mathematics', 'English Language Arts', 'Science', 'Social Studies', 'Arts', 'Physical Education'];

interface StandardsAlignmentBrowserProps {
  onStandardSelect?: (standard: Standard) => void;
  selectedStandards?: string[];
  allowMultiSelect?: boolean;
  showLessonCounts?: boolean;
  className?: string;
}

export function StandardsAlignmentBrowser({
  onStandardSelect,
  selectedStandards = [],
  allowMultiSelect = true,
  showLessonCounts = true,
  className = ''
}: StandardsAlignmentBrowserProps) {
  const [activeSet, setActiveSet] = useState('ccss');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const currentStandardsSet = standardsSets.find(set => set.id === activeSet);

  const filteredStandards = useMemo(() => {
    if (!currentStandardsSet) return [];

    return currentStandardsSet.standards.filter(standard => {
      const matchesSearch = searchTerm === '' || 
        standard.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        standard.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        standard.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesGrade = selectedGrades.length === 0 || selectedGrades.includes(standard.grade);
      const matchesSubject = selectedSubjects.length === 0 || selectedSubjects.includes(standard.subject);

      return matchesSearch && matchesGrade && matchesSubject;
    });
  }, [currentStandardsSet, searchTerm, selectedGrades, selectedSubjects]);

  const handleStandardToggle = (standard: Standard) => {
    if (onStandardSelect) {
      onStandardSelect(standard);
    }
  };

  const handleGradeToggle = (grade: string) => {
    setSelectedGrades(prev => 
      prev.includes(grade) 
        ? prev.filter(g => g !== grade)
        : [...prev, grade]
    );
  };

  const handleSubjectToggle = (subject: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
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
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Standards Alignment Browser</h2>
        </div>
        <p className="text-muted-foreground">
          Browse and align your lessons with educational standards. Find the perfect standards match for your teaching objectives.
        </p>
      </div>

      {/* Standards Set Tabs */}
      <Tabs value={activeSet} onValueChange={setActiveSet}>
        <TabsList className="grid w-full grid-cols-2">
          {standardsSets.map(set => (
            <TabsTrigger key={set.id} value={set.id} className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {set.abbreviation}
            </TabsTrigger>
          ))}
        </TabsList>

        {standardsSets.map(set => (
          <TabsContent key={set.id} value={set.id} className="space-y-6">
            {/* Standards Set Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  {set.name}
                </CardTitle>
                <CardDescription>{set.description}</CardDescription>
              </CardHeader>
            </Card>

            {/* Search and Filters */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search standards by code, title, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Filter Toggle */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                    {(selectedGrades.length > 0 || selectedSubjects.length > 0) && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedGrades.length + selectedSubjects.length}
                      </Badge>
                    )}
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    {filteredStandards.length} standards found
                  </div>
                </div>

                {/* Filters */}
                {showFilters && (
                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                    {/* Grade Filters */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Grade Levels</Label>
                      <div className="flex flex-wrap gap-2">
                        {grades.map(grade => (
                          <div key={grade} className="flex items-center space-x-2">
                            <Checkbox
                              id={`grade-${grade}`}
                              checked={selectedGrades.includes(grade)}
                              onCheckedChange={() => handleGradeToggle(grade)}
                            />
                            <Label htmlFor={`grade-${grade}`} className="text-sm">{grade}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subject Filters */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Subjects</Label>
                      <div className="space-y-2">
                        {subjects.map(subject => (
                          <div key={subject} className="flex items-center space-x-2">
                            <Checkbox
                              id={`subject-${subject}`}
                              checked={selectedSubjects.includes(subject)}
                              onCheckedChange={() => handleSubjectToggle(subject)}
                            />
                            <Label htmlFor={`subject-${subject}`} className="text-sm">{subject}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Standards List */}
            <div className="space-y-4">
              {filteredStandards.map(standard => (
                <Card 
                  key={standard.id} 
                  className={`hover:shadow-md transition-shadow cursor-pointer ${
                    selectedStandards.includes(standard.id) ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => handleStandardToggle(standard)}
                >
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono text-xs">
                              {standard.code}
                            </Badge>
                            <Badge className={getDifficultyColor(standard.difficulty)}>
                              {standard.difficulty}
                            </Badge>
                            <Badge variant="secondary">
                              Grade {standard.grade} • {standard.subject}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg">{standard.title}</h3>
                        </div>
                        
                        {selectedStandards.includes(standard.id) && (
                          <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground">{standard.description}</p>

                      {/* Metadata */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="font-medium">{standard.domain}</span>
                          {standard.cluster && (
                            <>
                              <span>•</span>
                              <span>{standard.cluster}</span>
                            </>
                          )}
                        </div>
                        
                        {showLessonCounts && (
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-green-600" />
                            <span className="text-muted-foreground">
                              {standard.alignedLessons} aligned lessons
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredStandards.length === 0 && (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="space-y-2">
                      <Search className="w-8 h-8 text-muted-foreground mx-auto" />
                      <h3 className="font-medium">No standards found</h3>
                      <p className="text-sm text-muted-foreground">
                        Try adjusting your search terms or filters
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Selected Standards Summary */}
      {selectedStandards.length > 0 && (
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Selected Standards ({selectedStandards.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedStandards.map(standardId => {
                const standard = currentStandardsSet?.standards.find(s => s.id === standardId);
                return standard ? (
                  <Badge key={standardId} variant="secondary" className="bg-blue-100 text-blue-800">
                    {standard.code}: {standard.title}
                  </Badge>
                ) : null;
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}