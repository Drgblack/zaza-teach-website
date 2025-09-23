'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { 
  Download, 
  FileText, 
  CheckCircle, 
  Mail, 
  Clock,
  Users,
  Star,
  Eye,
  Lock,
  Gift
} from 'lucide-react';

interface DownloadableResourceProps {
  title: string;
  description: string;
  fileType: 'PDF' | 'DOCX' | 'PPT' | 'ZIP' | 'XLS';
  fileSize: string;
  downloadUrl?: string;
  previewUrl?: string;
  features: string[];
  requiresEmail?: boolean;
  isFreemium?: boolean;
  downloadCount?: number;
  rating?: number;
  lastUpdated?: string;
  category?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  timeToComplete?: string;
  className?: string;
}

export function DownloadableResource({
  title,
  description,
  fileType,
  fileSize,
  downloadUrl,
  previewUrl,
  features,
  requiresEmail = true,
  isFreemium = true,
  downloadCount,
  rating,
  lastUpdated,
  category,
  difficulty,
  timeToComplete,
  className = ''
}: DownloadableResourceProps) {
  const [email, setEmail] = useState('');
  const [agreeToEmails, setAgreeToEmails] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [showEmailGate, setShowEmailGate] = useState(false);

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF': return '📄';
      case 'DOCX': return '📝';
      case 'PPT': return '📊';
      case 'ZIP': return '📦';
      case 'XLS': return '📈';
      default: return '📄';
    }
  };

  const getFileColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'bg-red-100 text-red-800';
      case 'DOCX': return 'bg-blue-100 text-blue-800';
      case 'PPT': return 'bg-orange-100 text-orange-800';
      case 'ZIP': return 'bg-purple-100 text-purple-800';
      case 'XLS': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (level?: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDownload = async () => {
    if (requiresEmail && !hasDownloaded && !showEmailGate) {
      setShowEmailGate(true);
      return;
    }

    if (requiresEmail && (!email || !agreeToEmails)) {
      return;
    }

    setIsDownloading(true);

    try {
      // If requires email, submit email first
      if (requiresEmail && !hasDownloaded) {
        // Simulate email submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In real implementation:
        // await fetch('/api/download-gate', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email, resource: title }),
        // });
      }

      // Track download event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'file_download', {
          event_category: 'engagement',
          event_label: title,
          file_type: fileType,
          file_name: title.toLowerCase().replace(/\s+/g, '-'),
        });
      }

      // Trigger download
      if (downloadUrl) {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${title.replace(/\s+/g, '-')}.${fileType.toLowerCase()}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // For demo purposes, show success without actual download
        console.log('Download would happen here:', title);
      }

      setHasDownloaded(true);
      setShowEmailGate(false);

    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePreview = () => {
    if (previewUrl) {
      window.open(previewUrl, '_blank');
    }

    // Track preview event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'file_preview', {
        event_category: 'engagement',
        event_label: title,
        file_type: fileType,
      });
    }
  };

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{getFileIcon(fileType)}</span>
              <Badge className={getFileColor(fileType)}>
                {fileType} • {fileSize}
              </Badge>
              {isFreemium && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Gift className="w-3 h-3 mr-1" />
                  Free
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <CardDescription className="text-base">{description}</CardDescription>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap gap-2 pt-2">
          {category && (
            <Badge variant="outline">{category}</Badge>
          )}
          {difficulty && (
            <Badge className={getDifficultyColor(difficulty)} variant="secondary">
              {difficulty}
            </Badge>
          )}
          {timeToComplete && (
            <Badge variant="outline">
              <Clock className="w-3 h-3 mr-1" />
              {timeToComplete}
            </Badge>
          )}
        </div>

        {/* Stats */}
        {(downloadCount || rating || lastUpdated) && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            {downloadCount && (
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                <span>{downloadCount.toLocaleString()} downloads</span>
              </div>
            )}
            {rating && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{rating}/5</span>
              </div>
            )}
            {lastUpdated && (
              <div className="flex items-center gap-1">
                <span>Updated {lastUpdated}</span>
              </div>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Features */}
        <div>
          <h4 className="font-medium mb-2">What's included:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Email Gate */}
        {showEmailGate && requiresEmail && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <h4 className="font-medium text-blue-900">Get Your Free Download</h4>
            </div>
            <p className="text-sm text-blue-700">
              Enter your email to download this resource and get more teaching tips delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agree-download"
                  checked={agreeToEmails}
                  onCheckedChange={(checked) => setAgreeToEmails(checked as boolean)}
                  className="mt-0.5"
                />
                <label htmlFor="agree-download" className="text-xs text-gray-600 leading-tight">
                  I agree to receive this download and occasional teaching tips via email.
                </label>
              </div>
            </div>
          </div>
        )}

        <Separator />

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            onClick={handleDownload}
            disabled={isDownloading || (showEmailGate && (!email || !agreeToEmails))}
            className="flex-1"
            size="lg"
          >
            {hasDownloaded ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                Downloaded
              </>
            ) : isDownloading ? (
              'Preparing Download...'
            ) : requiresEmail && !showEmailGate && !hasDownloaded ? (
              <>
                <Lock className="w-5 h-5 mr-2" />
                Get Free Download
              </>
            ) : (
              <>
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </>
            )}
          </Button>
          
          {previewUrl && (
            <Button
              onClick={handlePreview}
              variant="outline"
              size="lg"
            >
              <Eye className="w-5 h-5 mr-2" />
              Preview
            </Button>
          )}
        </div>

        {/* Success Message */}
        {hasDownloaded && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
            <p className="text-sm text-green-700">
              <strong>Success!</strong> Your download should start automatically. 
              Check your downloads folder.
            </p>
          </div>
        )}

        {/* Social Proof */}
        {downloadCount && downloadCount > 100 && (
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              <Users className="w-3 h-3 inline mr-1" />
              Trusted by {downloadCount.toLocaleString()}+ educators
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Compact version for resource lists
export function DownloadableResourceCompact({
  title,
  fileType,
  fileSize,
  downloadCount,
  downloadUrl,
  className = ''
}: Pick<DownloadableResourceProps, 'title' | 'fileType' | 'fileSize' | 'downloadCount' | 'downloadUrl' | 'className'>) {
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF': return '📄';
      case 'DOCX': return '📝';
      case 'PPT': return '📊';
      case 'ZIP': return '📦';
      case 'XLS': return '📈';
      default: return '📄';
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${title.replace(/\s+/g, '-')}.${fileType.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // Track download
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'file_download_compact', {
        event_category: 'engagement',
        event_label: title,
        file_type: fileType,
      });
    }
  };

  return (
    <div className={`flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors ${className}`}>
      <div className="flex items-center gap-3">
        <span className="text-xl">{getFileIcon(fileType)}</span>
        <div>
          <h4 className="font-medium text-sm">{title}</h4>
          <p className="text-xs text-muted-foreground">
            {fileType} • {fileSize}
            {downloadCount && ` • ${downloadCount.toLocaleString()} downloads`}
          </p>
        </div>
      </div>
      <Button size="sm" onClick={handleDownload}>
        <Download className="w-4 h-4" />
      </Button>
    </div>
  );
}