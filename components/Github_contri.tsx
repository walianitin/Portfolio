"use client"
import { useState, useEffect ,useCallback } from 'react';
import ActivityCalendar from 'react-activity-calendar';

interface Activity {
  date: string;
  count: number;
  level: number;
}

const GitHubActivityCalendar = ({ username }: { username: string }) => {
 const [contribution, setContribution] = useState<Activity[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const contributions = await fetchContributionData(username);
      setContribution(contributions);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw Error(`Error fetching contribution data: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div className="flex justify-center mt-10">Loading activity data...</div>;
  }
const todayDate=new Date();
const yearAgo= new Date();
yearAgo.setDate(todayDate.getDate()-365);
  return (
      <>
      <div className=' flex flex-row justify-center '>
    <ActivityCalendar 
  data={contribution.slice(0,365)} 
  theme={{
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479']
  }}
  blockRadius={20}
  blockSize={14}
  fontSize={15}
  hideColorLegend={false}
  hideMonthLabels={false}
  hideTotalCount={true}
  colorScheme="dark" // or "dark" depending on your preference
/>
      </div>
 </>
  );
};
async function fetchContributionData(username: string): Promise<Activity[]> {
  const response = await fetch(`https://github.vineet.pro/api/${username}`);
  const responseBody = await response.json();

  if (!response.ok) {
    throw Error("Erroring fetching contribution data");
  }
  return responseBody.data;
}

export default GitHubActivityCalendar;
