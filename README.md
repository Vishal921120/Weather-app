# Weather App

This is a simple weather application built with React.js, Tailwind CSS. It fetches weather data from the RapidAPI weather API named Visual Crossing Weather.

## Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository to your local machine: git clone https://github.com/Vishal921120/Weather-app/ 
2.  Navigate to the project directory: cd weather-app
3. Install dependencies: npm install

### Configuration

Before running the application, you need to set up the RapidAPI API key. Follow these steps:

1. Sign up for a free account on RapidAPI (https://rapidapi.com/).
2. Subscribe to the weather API (or any other relevant API).
3. Copy your API key from the RapidAPI dashboard.
4. Create a `.env` file in the root directory of the project.
5. Add the following line to the `.env` file, replacing `<YOUR_API_KEY>` with your actual API key: VITE_API_KEY= {paste your api here}


### Running the Application

Once you've installed the dependencies and configured the API key, you can run the application: npm run dev

The application will start locally on http://localhost:5173 by default.

## Usage

- Enter a city name in the search bar and press Enter or click the search button to fetch the weather data for that city.
- Toggle between Celsius and Fahrenheit using the temperature unit switch.

