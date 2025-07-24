import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    salary: ""
  });

  // Fetch all employees
  async function fetchEmployees() {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`/api/employees/getAll`);
      setEmployees(response.data);
    } catch (error) {
      setError("Error fetching employees: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  // Create new employee
  async function createEmployee(employeeData) {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(`/api/employees/create`, employeeData);
      setEmployees([...employees, response.data]);
      resetForm();
      setShowForm(false);
    } catch (error) {
      setError("Error creating employee: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  // Update employee
  async function updateEmployee(id, employeeData) {
    setLoading(true);
    setError("");
    try {
      const response = await axios.put(`/api/employees/edit/${id}`, employeeData);
      setEmployees(employees.map(emp => emp.id === id ? response.data : emp));
      resetForm();
      setEditingEmployee(null);
      setShowForm(false);
      fetchEmployees();
    } catch (error) {
      setError("Error updating employee: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  // Delete employee
  async function deleteEmployee(id) {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    
    setLoading(true);
    setError("");
    try {
      await axios.delete(`/api/employees/delete/${id}`);
      setEmployees(employees.filter(emp => emp.id !== id));
    } catch (error) {
      setError("Error deleting employee: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (editingEmployee) {
      updateEmployee(editingEmployee.id, formData);
    } else {
      createEmployee(formData);
    }
  }

  // Reset form
  function resetForm() {
    setFormData({
      name: "",
      email: "",
      position: "",
      department: "",
      salary: ""
    });
  }

  // Handle edit
  function handleEdit(employee) {
    setEditingEmployee(employee);
    setFormData({
      name: employee.name || "",
      email: employee.email || "",
      position: employee.position || "",
      department: employee.department || "",
      salary: employee.salary || ""
    });
    setShowForm(true);
  }

  // Handle input change
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  // Load employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Employee Management System</h1>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setShowForm(!showForm);
                setEditingEmployee(null);
                resetForm();
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              {showForm ? "Cancel" : "Add Employee"}
            </button>
            <button
              onClick={fetchEmployees}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {editingEmployee ? "Edit Employee" : "Add New Employee"}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-6 py-2 rounded-md transition-colors"
                >
                  {editingEmployee ? "Update Employee" : "Add Employee"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Employee List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Employees ({employees.length})</h2>
          
          {employees.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No employees found. Add some employees to get started.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Position</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Department</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Salary</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={employee.id || index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{employee.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{employee.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{employee.position}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{employee.department}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">${employee.salary}</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(employee)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteEmployee(employee.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;