import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2022-07-18T00:00:00.000Z',
            '2022-07-19T00:00:00.000Z',
            '2022-07-20T00:00:00.000Z',
            '2022-07-21T00:00:00.000Z',
            '2022-07-22T00:00:00.000Z',
            '2022-07-23T00:00:00.000Z',
            '2022-07-24T00:00:00.000Z',
            // new Date("2022-03-23T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            // new Date("2022-03-24T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            // new Date("2022-03-25T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            // new Date("2022-03-26T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            // new Date("2022-03-27T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            // new Date("2022-03-28T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" }),
            // new Date("2022-03-29T00:00:00.000Z").toLocaleString('pt-BR', { day: "2-digit", month: "short" })
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
};

const series = [
    { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
];

export default function Dashboard() {
    return (
    <Flex direction="column" h="100vh">
            <Header />
            
             <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6"> 
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start"> 
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}                        
                        // h="100%"
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={170}/>
                    </Box>
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}                        
                        // h="100%"
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Chart options={options} series={series} type="area" height={170}/>
                    </Box>
                </SimpleGrid>
             </Flex>
        </Flex>
    )
}