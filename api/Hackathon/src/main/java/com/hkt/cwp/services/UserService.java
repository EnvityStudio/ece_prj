/**
 * 
 */
package com.hkt.cwp.services;

import org.springframework.http.HttpStatus;

import com.hkt.cwp.bean.MessageListException;
import com.hkt.cwp.bean.ResultBean;

/**
 * @author CaoTT
 *
 */
public interface UserService {

	ResultBean authority(String jsonData) throws MessageListException , Exception;
	
	ResultBean getUser(String userName, String password) throws MessageListException , Exception;
	ResultBean registerUser(String jsonData) throws MessageListException , Exception;
	ResultBean searchEmp(String key, String page, String skillIdStr) throws MessageListException , Exception;
    ResultBean getCurrentCapacity(String user_id) throws MessageListException, Exception;
	HttpStatus getStatus();
}
