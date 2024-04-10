import axios from 'axios';

interface ServiceStatus {
    [serviceName: string]: boolean; 
}

export const serviceStatus: ServiceStatus = {};

async function checkServiceHealth(serviceName: string, url: string) {
    try {
        const response = await axios.get(url);
        serviceStatus[serviceName] = response.status === 200;
    } catch (error) {
        serviceStatus[serviceName] = false;
    }
}

export const startHealthChecks = () => {
    checkServiceHealth('authService', `${process.env.AUTH_SERVICE!}/health`); 
    setInterval(() => { 
        checkServiceHealth('authService', `${process.env.AUTH_SERVICE!}/health`); 
    }, 10000);
}

