'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Filter, X } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (query: string, location: string, type: string, tags: string[]) => void;
  initialQuery?: string;
  initialLocation?: string;
  initialType?: string;
}

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'];
const popularTags = ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Kubernetes', 'Machine Learning', 'DevOps'];

export default function SearchFilters({ 
  onSearch, 
  initialQuery = '', 
  initialLocation = '', 
  initialType = 'all' 
}: SearchFiltersProps) {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);
  const [type, setType] = useState(initialType);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = () => {
    onSearch(query, location, type, selectedTags);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setQuery('');
    setLocation('');
    setType('all'); // Updated to 'all'
    setSelectedTags([]);
    onSearch('', '', 'all', []);
  };

  const hasActiveFilters = query || location || type !== 'all' || selectedTags.length > 0;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      {/* Main Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Job title, company, or keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        
        <div className="lg:w-64 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        
        <div className="lg:w-48">
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {jobTypes.map(jobType => (
                <SelectItem key={jobType} value={jobType}>
                  {jobType}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Button onClick={handleSearch} className="lg:w-auto">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-gray-600"
        >
          <Filter className="h-4 w-4 mr-2" />
          Advanced Filters
        </Button>
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-gray-600"
          >
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="space-y-4 pt-4 border-t border-gray-200">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Skills & Technologies
            </label>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-blue-50 transition-colors"
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                  {selectedTags.includes(tag) && (
                    <X className="h-3 w-3 ml-1" />
                  )}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
          <span className="text-sm text-gray-600">Active filters:</span>
          {query && (
            <Badge variant="secondary">
              Query: {query}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setQuery('')}
              />
            </Badge>
          )}
          {location && (
            <Badge variant="secondary">
              Location: {location}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setLocation('')}
              />
            </Badge>
          )}
          {type !== 'all' && (
            <Badge variant="secondary">
              Type: {type}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setType('all')}
              />
            </Badge>
          )}
          {selectedTags.map(tag => (
            <Badge key={tag} variant="secondary">
              {tag}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => handleTagToggle(tag)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}