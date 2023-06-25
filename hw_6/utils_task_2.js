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

const getEnterprise = (val, searchArr) => {
    if (!val || typeof val !== 'number') return `Passed enterprise id not valid`;
    if (!searchArr) return `Searched arr not passed`;
    let enterprise = searchArr.find(el => el.id === val || el.name === val);
    return enterprise ? enterprise : false;
};

{
    const getEnterprise = (val, searchArr) => {
        if (!val || typeof val !== 'number') return `Passed enterprise id not valid`;
        if (!searchArr) return `Searched arr not passed`;

        let enterprise = searchArr.reduce((foundEnterprise, value) => {
            if (foundEnterprise) return foundEnterprise;
            if (value.id === val || value.name === val) return value;
            return foundEnterprise;
        }, null)

        return enterprise ? enterprise : false;
    }
}


const getDepartment = (val, searchArr) => {
    if (!val || typeof val !== 'number') return `Passed department id not valid`;
    if (!searchArr) return `Searched arr not passed`;
    let department;
    searchArr.forEach((company) => {
        const dept = company.departments.find((el) => {
            return el.id === val || el.name === val;
        });
        if (dept) department = dept;
    });
    return department ? department : false;
};

{
    // reduce
    const getDepartment = (val, searchArr) => {
        if (!val || typeof val !== 'number') return `Passed department id not valid`;
        if (!searchArr) return `Searched arr not passed`;

        const department = searchArr.reduce((foundDepartment, company) => {
            if (foundDepartment) return foundDepartment;

            const dept = company.departments.find((el) => el.id === val || el.name === val);
            return dept ? dept : foundDepartment;
        }, null);

        return department ? department : false;
    };
}

const log = console.log;

module.exports = {
    getNewID,
    countEmployee,
    getDepartment,
    getEnterprise,
    log,
};


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