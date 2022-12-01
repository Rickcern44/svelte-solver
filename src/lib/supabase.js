import { createClient } from "@supabase/supabase-js"
const supaBaseUrl = 'https://xowklciiplolnvmtdjgc.supabase.co'
const supaBaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvd2tsY2lpcGxvbG52bXRkamdjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2OTU1MDY5MiwiZXhwIjoxOTg1MTI2NjkyfQ.9Jsop7pxSytuzao-o7--ZS891IY2EmxzJVCd2EW5v2E'


// @ts-ignore
export const supabase = createClient(supaBaseUrl, supaBaseApiKey)
