const getBaseUrl = (type: 'api' | 'frontend') => {
    if (type === 'api') {
        switch (Number(process.env.ENVIRONMENT_API)) {
            case 0:
                return "https://api.stg.monument.io"
            default: {
                throw RangeError(
                    `Environmental variable is out of range: ENVIRONMENT_API=${process.env.ENVIRONMENT_API}`
                );
            }
        }
    } else {
        switch (Number(process.env.ENVIRONMENT)) {
            case 0:
                return "https://monument.stg.monument.io"
            default: {
                throw RangeError(
                    `Environmental variable is out of range: ENVIRONMENT=${process.env.ENVIRONMENT}`
                );
            }
        }
    }
};

export default getBaseUrl;