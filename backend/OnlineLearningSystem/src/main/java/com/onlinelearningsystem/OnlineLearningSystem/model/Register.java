package com.onlinelearningsystem.OnlineLearningSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Register {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
private String name,address,mobilenumber,birthdate,emailid,password,gender;
public Register() {
	super();
	// TODO Auto-generated constructor stub
}
public Register(String name, String address, String mobilenumber, String birthdate, String emailid, String password,
		String gender) {
	super();
	this.name = name;
	this.address = address;
	this.mobilenumber = mobilenumber;
	this.birthdate = birthdate;
	this.emailid = emailid;
	this.password = password;
	this.gender = gender;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getMobilenumber() {
	return mobilenumber;
}
public void setMobilenumber(String mobilenumber) {
	this.mobilenumber = mobilenumber;
}
public String getBirthdate() {
	return birthdate;
}
public void setBirthdate(String birthdate) {
	this.birthdate = birthdate;
}
public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}

}
