# Google Calendar Event Management App

## Description
This React application integrates with Google Calendar via Supabase and the Google Cloud Console to:
- Authenticate users via Google OAuth.
- Fetch and display Google Calendar events in a user-friendly table.
- Allow filtering events by date[dd-mm-yyyy].
- Provided an interface date column[mm-dd-yyyy].
- Provide a visually appealing user interface.

---

## Features
- **Google OAuth Authentication**: Secure login using Google accounts.
- **Event Fetching**: Retrieve Google Calendar events for authenticated users.
- **Event Filtering**: Filter events by date and display them in an organized table.
- **User-Friendly UI**: Responsive design and intuitive layout.

---

## Setup Instructions

### Prerequisites
1. **Node.js**: Install Node.js from [Node.js Official Site](https://nodejs.org/).
2. **Supabase Account**: Create an account at [Supabase](https://supabase.com/).
3. **Google Cloud Account**: Access Google Cloud Console at [Google Cloud](https://console.cloud.google.com/).

### Environment Variables
Create a `.env.local` file in the root directory and add the following:
```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```
Replace `your_supabase_url` and `your_supabase_anon_key` with the respective keys from your Supabase project.

---

### Steps to Run Locally(Steps)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository-name.git
   cd your-repository-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Access the app at `http://localhost:3000`.

---

## Deploying the App
### Prerequisites for Deployment
1. Move the OAuth consent screen from testing to production in Google Cloud Console.
2. Verify your app if required (for sensitive scopes)().
3. Ensure all API keys and credentials are correctly configured.

### Deployment Platform

#### Vercel
1. Link your GitHub repository to Vercel.
2. Add environment variables in the Vercel dashboard.
3. Deploy the project directly from the Vercel interface.







---

## Contact
For any issues or feedback, please contact:
**Email**: mayank.katyayan123@gmail.com

