import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tffbsxlkaygheskkoknl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmZmJzeGxrYXlnaGVza2tva25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzEzODQsImV4cCI6MjA3Nzg0NzM4NH0._ze_OFrp5g1jec9om7P32m65wlvUWnBFto9xrHGYOMQ'

export const supabase = createClient(supabaseUrl, supabaseKey)