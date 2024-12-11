import React from 'react';
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  VStack,
  Button,
} from '@chakra-ui/react';
import { DesignerDashboard } from '../../components/DesignerDashboard';
import { FabricGallery } from '../../components/FabricGallery';
import { DesignerListing } from '../../components/DesignerListing';

// Mock data - In a real app, this would come from an API
const mockDesignerData = {
  name: 'Alex Designer',
  tags: [
    {
      id: '1',
      category: 'FabricSpecialty',
      value: 'Denim',
      tier: 'Gold',
      projectsCompleted: 8,
      nextTierThreshold: 10,
    },
    {
      id: '2',
      category: 'Style',
      value: 'Casual',
      tier: 'Baseline',
      projectsCompleted: 3,
      nextTierThreshold: 10,
    },
  ],
  achievements: {
    totalProjects: 15,
    highestTier: 'Gold',
    topRatedListings: 5,
  },
};

const mockFabrics = [
  {
    id: '1',
    name: 'Organic Cotton',
    imageUrl: '/mock-images/fabric1.jpg',
    score: {
      qualityRating: 9.2,
      sustainabilityScore: 8.8,
      origin: 'India',
      supplier: 'EcoThreads Co.',
      certifications: ['Fair Trade', 'Organic'],
      ratedByDesigners: 12,
    },
    supplier: {
      name: 'EcoThreads Co.',
      origin: 'India',
      certifications: ['Fair Trade', 'Organic'],
    },
  },
];

export default function DesignerDashboardPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const handleScoreFabric = (fabricId: string) => {
    console.log('Score fabric:', fabricId);
    // In a real app, this would open the scoring modal
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.xl" py={8}>
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>My Listings</Tab>
            <Tab>Fabric Scoring</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <DesignerDashboard
                designerName={mockDesignerData.name}
                tags={mockDesignerData.tags}
                achievements={mockDesignerData.achievements}
              />
            </TabPanel>

            <TabPanel>
              <VStack spacing={6} align="stretch">
                <Button colorScheme="blue" alignSelf="flex-end">
                  Create New Listing
                </Button>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                  {/* Add mock listings here */}
                </SimpleGrid>
              </VStack>
            </TabPanel>

            <TabPanel>
              <FabricGallery
                fabrics={mockFabrics}
                canScore={true}
                onScoreFabric={handleScoreFabric}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}