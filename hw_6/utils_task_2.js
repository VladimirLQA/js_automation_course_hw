function getNewID(arr) {
    const maxID = arr.map((company) => {
        let companyID = company.id;
        if (company.departments) {
            const maxDepartmentID = Math.max(...company.departments.map((department) => department.id))
            companyID = Math.max(companyID, maxDepartmentID);
        }
        return companyID;
    });

    return Math.max(...maxID) + 1;
}


module.exports = {
    getNewID,

}

{
    const getNewID = (arr) => {
        let newID = 0;
        arr.forEach((company) => {
            if (newID < company.id) newID = company.id;
            if (company.departments) {
                company.departments.forEach((departments) => {
                    if (newID < departments.id) newID = departments.id;
                });
            }
        });
        return newID + 1;
    };
}

{
    const getNewID = (arr) => {
        return arr.reduce((newID, company) => {
            if (newID < company.id) newID = company.id;
            if (company.departments) {
                return company.departments.reduce((newID, department) => {
                    if (newID < department.id) newID = department.id;
                    return newID;
                }, newID);
            }
            return newID;
        }, 0) + 1;
    };
}

{
    const getNewID = (arr) => {
        const maxID = arr.map((company) => {
            let companyID = company.id;
            if (company.departments) {
                const maxDepartmentID = Math.max(...company.departments.map((department) => department.id))
                companyID = Math.max(companyID, maxDepartmentID);
            }
            return companyID;
        });

        return Math.max(...maxID) + 1;
    };
}