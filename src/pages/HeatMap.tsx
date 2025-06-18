import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

interface Report {
  id: string;
  zip_code: string;
  school_name?: string;
  grade?: string;
  created_at: string;
  notes?: string;
}

const HeatMap = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    zipCode: '',
    schoolName: '',
    grade: '',
    notes: ''
  });
  
  const { toast } = useToast();

  const fetchReports = async () => {
    try {
      const { data, error } = await supabase
        .from('lice_reports')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
      
      if (error) throw error;
      setReports(data || []);
    } catch (error) {
      console.error('Error fetching reports:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.zipCode) {
      toast({
        title: "Missing Information",
        description: "Please provide ZIP code.",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase
        .from('lice_reports')
        .insert({
          zip_code: formData.zipCode,
          school_name: formData.schoolName || null,
          grade: formData.grade || null,
          notes: formData.notes || null
        });

      if (error) throw error;

      setFormData({ zipCode: '', schoolName: '', grade: '', notes: '' });
      await fetchReports(); // Refresh the list
      
      toast({
        title: "Report Submitted",
        description: "Thank you for helping our community stay informed."
      });
    } catch (error) {
      console.error('Error submitting report:', error);
      toast({
        title: "Error",
        description: "Failed to submit report. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const zipCodeCounts = reports.reduce((acc, report) => {
    acc[report.zip_code] = (acc[report.zip_code] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const alabamaZipCodes = {
    '35950': 'Albertville',
    '35951': 'Albertville/Guntersville',
    '35957': 'Douglas/Boaz',
    '35964': 'Douglas',
    '35980': 'Douglas',
    '35016': 'Arab',
    '35976': 'Guntersville'
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#003366] mb-4">
              National Lice Heat Map
            </h1>
            <p className="text-lg text-gray-600">
              Anonymous community reporting to help families stay informed nationwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Report Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#003366]">
                  Report a Case (Anonymous)
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Help your community by reporting lice cases. All submissions are timestamped.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
                      placeholder="35950"
                      maxLength={5}
                      pattern="[0-9]{5}"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="schoolName">School Name</Label>
                    <Input
                      id="schoolName"
                      value={formData.schoolName}
                      onChange={(e) => setFormData(prev => ({ ...prev, schoolName: e.target.value }))}
                      placeholder="Enter school name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="grade">Grade</Label>
                    <Select value={formData.grade} onValueChange={(value) => setFormData(prev => ({ ...prev, grade: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pre-K">Pre-K</SelectItem>
                        <SelectItem value="Kindergarten">Kindergarten</SelectItem>
                        <SelectItem value="1st Grade">1st Grade</SelectItem>
                        <SelectItem value="2nd Grade">2nd Grade</SelectItem>
                        <SelectItem value="3rd Grade">3rd Grade</SelectItem>
                        <SelectItem value="4th Grade">4th Grade</SelectItem>
                        <SelectItem value="5th Grade">5th Grade</SelectItem>
                        <SelectItem value="6th Grade">6th Grade</SelectItem>
                        <SelectItem value="7th Grade">7th Grade</SelectItem>
                        <SelectItem value="8th Grade">8th Grade</SelectItem>
                        <SelectItem value="9th Grade">9th Grade</SelectItem>
                        <SelectItem value="10th Grade">10th Grade</SelectItem>
                        <SelectItem value="11th Grade">11th Grade</SelectItem>
                        <SelectItem value="12th Grade">12th Grade</SelectItem>
                        <SelectItem value="College">College</SelectItem>
                        <SelectItem value="Adult">Adult</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Any additional information..."
                      rows={3}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#006d77] hover:bg-[#005a63]"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Anonymous Report'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Heat Map Visualization */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#003366]">
                  Recent Reports ({reports.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#006d77] mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading reports...</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {reports.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">
                        No reports yet. Be the first to submit!
                      </p>
                    ) : (
                      reports.map((report) => (
                        <div key={report.id} className="p-3 bg-gray-50 rounded border-l-4 border-[#006d77]">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="font-medium text-[#003366]">
                                ZIP: {report.zip_code}
                                {alabamaZipCodes[report.zip_code as keyof typeof alabamaZipCodes] && 
                                  ` (${alabamaZipCodes[report.zip_code as keyof typeof alabamaZipCodes]})`
                                }
                              </div>
                              {report.school_name && (
                                <div className="text-sm font-medium text-gray-700">
                                  School: {report.school_name}
                                </div>
                              )}
                              {report.grade && (
                                <div className="text-sm text-gray-600">
                                  Grade: {report.grade}
                                </div>
                              )}
                              {report.notes && (
                                <div className="text-sm text-gray-500 mt-1">
                                  {report.notes}
                                </div>
                              )}
                            </div>
                            <div className="text-xs text-gray-500 ml-4">
                              {formatDate(report.created_at)}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
                
                {/* ZIP Code Summary */}
                {Object.keys(zipCodeCounts).length > 0 && (
                  <div className="mt-6 pt-4 border-t">
                    <h4 className="font-medium text-[#003366] mb-3">Reports by ZIP Code</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(zipCodeCounts)
                        .sort(([,a], [,b]) => b - a)
                        .map(([zip, count]) => (
                        <div key={zip} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="font-medium">
                            {zip}
                            {alabamaZipCodes[zip as keyof typeof alabamaZipCodes] && 
                              ` - ${alabamaZipCodes[zip as keyof typeof alabamaZipCodes]}`
                            }
                          </span>
                          <span className="text-sm bg-[#006d77] text-white px-2 py-1 rounded">
                            {count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Card className="bg-[#003366] text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Need Professional Treatment?
                </h3>
                <p className="mb-6">
                  Don't let lice stress you out. Our mobile service comes to you.
                </p>
                <Button size="lg" className="bg-[#006d77] hover:bg-[#005a63]">
                  Schedule Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;