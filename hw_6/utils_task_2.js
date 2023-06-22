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

const countEmployee = (number) => {
    let lastNumber = number.toString().split('').pop();
    if (lastNumber && number) {
        if (lastNumber == 1) return `${number} - сотрудник`;
        else if (lastNumber > 1 && lastNumber < 5) return `${number} - сотрудника`;
        else return `${number} - сотрудников`;
    } else return "Нет сотрудников"
};


module.exports = {
    getNewID,
    countEmployee,

}


// ====================================== variations of util for task 3  ================================
 // forEach
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

// reduce
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

 // map
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

// for... of

{
    const getNewID = (arr) => {
        const maxID = [];

        for (const company of arr) {
            let companyID = company.id;
            if (company.departments) {
                const departmentIDs = [];
                for (const department of company.departments) {
                    departmentIDs.push(department.id);
                }
                const maxDepartmentID = Math.max(...departmentIDs);
                companyID = Math.max(companyID, maxDepartmentID);
            }
            maxID.push(companyID);
        }

        return Math.max(...maxID) + 1;
    };
}