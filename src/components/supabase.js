import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://skcdmyahkywuqpumaqdo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrY2RteWFoa3l3dXFwdW1hcWRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMzYwMDUsImV4cCI6MjA2OTkxMjAwNX0.9Sp-ApayXpQNJcd2QZ2v5FPxUFi1sKQ6PDXQMnWD4V4'  // ← Paste the actual anon key here

const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase