import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://wzqvynjpkxhhllknbcdw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6cXZ5bmpwa3hoaGxsa25iY2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMTk4ODgsImV4cCI6MjA2NTc5NTg4OH0.oUfZmE1kEhbsTu9B_17vwuazHqkT2OW0Cm4-4o6SJjs';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };