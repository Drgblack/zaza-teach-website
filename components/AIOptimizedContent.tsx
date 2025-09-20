import React from 'react';

interface AIOptimizedContentProps {
  children: React.ReactNode;
  semanticKeywords?: string[];
  primaryKeyword?: string;
  topicalRelevance?: string[];
}

export function AIOptimizedContent({ 
  children, 
  semanticKeywords = [], 
  primaryKeyword,
  topicalRelevance = []
}: AIOptimizedContentProps) {
  return (
    <div className="ai-optimized-content">
      {/* Hidden semantic keywords for AI crawlers */}
      <div style={{ display: 'none' }} aria-hidden="true">
        {semanticKeywords.map((keyword, index) => (
          <span key={index} data-semantic-keyword={keyword}>
            {keyword}
          </span>
        ))}
        {topicalRelevance.map((topic, index) => (
          <span key={index} data-topic={topic}>
            {topic}
          </span>
        ))}
        {primaryKeyword && (
          <span data-primary-keyword={primaryKeyword}>
            {primaryKeyword}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export function SchemaEnhancedText({ 
  text, 
  schemaType = 'text',
  semanticMeaning,
  children 
}: { 
  text?: string;
  schemaType?: 'headline' | 'description' | 'text' | 'keyword';
  semanticMeaning?: string;
  children?: React.ReactNode;
}) {
  const content = children || text;
  
  return (
    <span 
      data-schema-type={schemaType}
      data-semantic-meaning={semanticMeaning}
      itemProp={schemaType === 'headline' ? 'headline' : schemaType === 'description' ? 'description' : undefined}
    >
      {content}
    </span>
  );
}

// AI-optimized semantic keywords for education/teaching domain
export const EDUCATION_SEMANTIC_KEYWORDS = [
  // Primary teaching concepts
  'lesson planning', 'curriculum development', 'educational technology', 'pedagogy',
  'instructional design', 'assessment strategies', 'learning objectives', 'educational outcomes',
  
  // AI/Technology terms
  'artificial intelligence in education', 'AI-powered teaching tools', 'automated lesson planning',
  'educational AI assistant', 'smart curriculum design', 'intelligent tutoring systems',
  
  // Teacher pain points (long-tail)
  'reduce teacher workload', 'save lesson planning time', 'efficient curriculum mapping',
  'standards-aligned lessons', 'differentiated instruction planning', 'assessment rubric generation',
  
  // Subject-specific
  'math lesson plans', 'science curriculum', 'language arts activities', 'social studies resources',
  'STEM education', 'literacy development', 'numeracy skills', 'critical thinking exercises',
  
  // Grade levels
  'elementary education', 'middle school teaching', 'high school curriculum', 'K-12 education',
  'primary school lessons', 'secondary education planning',
  
  // Educational standards
  'Common Core aligned', 'state standards mapping', 'learning standards compliance',
  'curriculum standards', 'educational benchmarks', 'assessment criteria',
  
  // Professional development
  'teacher professional development', 'educator training', 'teaching best practices',
  'classroom management', 'student engagement strategies', 'educational innovation'
];

export const AI_EDUCATION_TOPICS = [
  'teacher productivity', 'educational efficiency', 'classroom technology integration',
  'personalized learning', 'adaptive curriculum', 'data-driven instruction',
  'student-centered learning', 'collaborative teaching tools', 'educational analytics',
  'formative assessment', 'summative evaluation', 'competency-based education'
];