/**
 * 
 */
package com.virtusa.jpmc.dao;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Repository;

import com.virtusa.jpmc.dto.Employee;

/**
 * @author sarita
 *
 */
@Repository
public class EmployeeDAO {
	
	private static final Map<Long, Employee> empMap = new HashMap<Long, Employee>();
	private static AtomicLong ID_GENERATOR = new AtomicLong(10000);
	
	static {
		Employee emp1 = new Employee(ID_GENERATOR.getAndIncrement(), "Sarita", "F", "Mumbai","Associate Consultant");
        Employee emp2 = new Employee(ID_GENERATOR.getAndIncrement(), "Megha", "F", "New Delhi","Lead Consultant");
        Employee emp3 = new Employee(ID_GENERATOR.getAndIncrement(), "Vinod Kumar", "M", "Mumbai","Lead Consultant");
        Employee emp4 = new Employee(ID_GENERATOR.getAndIncrement(), "Venkatesh", "M", "Hyderabad","Associate Manager");
  
        empMap.put(emp1.getId(), emp1);
        empMap.put(emp2.getId(), emp2);
        empMap.put(emp3.getId(), emp3);
        empMap.put(emp4.getId(), emp4);
	}

	public List<Employee> getAllEmployees() {
		Collection<Employee> c = empMap.values();
        List<Employee> list = new ArrayList<Employee>();
        list.addAll(c);
        return list;
	}

	public void saveUser(Employee emp) {
		emp.setId(ID_GENERATOR.getAndIncrement());
		empMap.put(emp.getId(), emp);
	}

}
