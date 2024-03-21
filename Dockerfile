FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .

ENV VITE_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZHF5Z2l3bXdqcnZrYXB2b2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5ODk5NTIsImV4cCI6MjAyMDU2NTk1Mn0.zKbI3Rx9z7JY2I_iZ8zrO9lt3n5yehyJz8WBhY1Mahc \
    VITE_SERVICE_ID=service_m5gpx6e \
    VITE_TEMPLATE_ID=template_54fzlsh \
    VITE_PUBLIC_KEY=7aWQ4CpnI3KQb5_Wl \
    VITE_QUOTE_KEY=2QGoiW6zfVl5lMjewll2pw==pDe1ebphNl9Eca6F \
    VITE_SUPABASE_URL=https://ijdqygiwmwjrvkapvolt.supabase.co/rest/v1/ \
    VITE_TEST=test

EXPOSE 5175

CMD ["npm", "run", "dev"] 