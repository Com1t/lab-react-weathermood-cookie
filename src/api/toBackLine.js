import axios from 'axios';

// Develop server URL
const postBaseUrl = 'http://140.114.91.242:3000';

/* data should like this 
var data = qs.stringify({
  'title': 'BUY MASK',
  'url': 'http://MMM%(&^*&^.com',
  'content': 'MASK',
  'owner': '60add554ec270526baeaa1d1',
  'color_RGB': '[12,23,45]',
  'create_date': '2015-11-22T08:01:35.915+00:00',
  'due_date': '2020-11-25T08:01:35.915+00:00',
  'is_main': 'true',
  'permission': 'false' 
}); */
export function addLine(data) {
  let url = `${postBaseUrl}/line/addLine`;
  let headers = { 
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  
  return axios.post(url, data, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });
}

// modifyLine
// '/line/modifyLine/:lineId'
// for instance
// /line/modifyLine/60bb739ed1ca181d8cecbaa3
/* 
data should like this 
You only need to put what you want to change into it
NO INTEGRITY CHECK!!!
BE CAREFUL ABOUT WHAT YOU DOING!!!
var data = qs.stringify({
  'title': 'BUY MASK',
  // 'url': 'http://MMM%(&^*&^.com',
  // 'content': 'MASK',
  // 'owner': '60add554ec270526baeaa1d1',
  // 'color_RGB': '[12,23,45]',
  // 'create_date': '2015-11-22T08:01:35.915+00:00',
  // 'due_date': '2020-11-25T08:01:35.915+00:00',
  // 'is_main': 'true',
  // 'permission': 'false' 
}); */
export function modifyLine(lineId,data) {
  let url = `${postBaseUrl}/line/modifyLine/`;
  url = url + lineId;
  let headers = { 
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  
  return axios.put(url, data, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });
}


// getLine
export function getLine(lineId) {
  let url = `${postBaseUrl}/line/getLine/`;
  url = url + lineId;
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  console.log(url)
  console.log(headers)
  
  return axios.get(url, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });
}

// setMainLine
// '/line/setMainLine/:userId/:lineId'
// for instance
// /line/setMainLine/60bb236fb6ced33c4c9b3e80/60bb739ed1ca181d8cecbaa3
export function setMainLine(userId, lineId) {
  let url = `${postBaseUrl}/line/setMainLine/`;
  url = url + userId + '/' + lineId;
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  
  return axios.put(url, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });

}

// shareLine
// '/line/shareLine/:lineId/:userId'
// for instance
// /line/shareLine/60bb739ed1ca181d8cecbaa3/60bb236fb6ced33c4c9b3e80
export function shareLine(lineId, userId) {
  let url = `${postBaseUrl}/line/shareLine/`;
  url = url + lineId + '/' + userId;
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  console.log(url)
  return axios.put(url, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });

}

// setShareProgress
// '/line/setShareProgress/:lineId/:userId/:nodeId'
// for instance
// /line/setShareProgress/60bb739ed1ca181d8cecbaa3/60bb236fb6ced33c4c9b3e80/60bb739ed1ca181d8cecbab8
export function setShareProgress(lineId, userId, nodeId) {
  let url = `${postBaseUrl}/line/setShareProgress/`;
  url = url + lineId + '/' + userId + '/' + nodeId;
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  
  return axios.put(url, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });

}

// getMainLine
export function getMainLine(userId) {
  let url = `${postBaseUrl}/line/getMainLine/`;
  url = url + userId;
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  console.log(url)
  console.log(headers)
  
  return axios.get(url, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });
}

// copyLine
// '/line/copyLine/:userId/:lineId'
// for instance
// /line/copyLine/60bb236fb6ced33c4c9b3e80/60bb739ed1ca181d8cecbaa3
export function copyLine(userId, lineId) {
  let url = `${postBaseUrl}/line/copyLine/`;
  url = url + userId + '/' + lineId;
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  console.log(url)
  console.log(headers)
  
  return axios.get(url, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });
}

// getNodesByLine
// '/line/getNodesByLine/:lineId/:offset/:amount/:sortby'
// for instance
// /line/getNodesByLine/60bb739ed1ca181d8cecbaa3/0/5/0
// this will get you node 0-5 of 60bb739ed1ca181d8cecbaa3 in ascending data order (for later, later order)
export function getNodesByLine(lineId, offset, amount, sortby) {
  let url = `${postBaseUrl}/line/getNodesByLine/`;
  url = url + lineId + '/' + offset + '/' + amount + '/' + sortby;
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  console.log(url)
  console.log(headers)
  
  return axios.get(url, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });
}


// addBranch
// '/line/addBranch'
/* 
data should like this 
var data = qs.stringify({
  'owner': '60add554ec270526baeaa1d1',
  'url': '',
  'title': 'MUSK',
  'content': 'BUY MASK',
  'color_RGB': '[12,23,45]',
  'create_date': '2015-11-22T08:01:35.915+00:00',
  'due_date': '2020-11-25T08:01:35.915+00:00',
  'is_main': 'false',
  'permission': 'false',	// before here are one line object
  'nodeId': '60c32033e46b792cdc86a643' // here is nodeId
}); */
// effect: this will create line object as branch of node '60c32033e46b792cdc86a643'
export function addBranch(data) {
  let url = `${postBaseUrl}/line/addBranch`;
  let headers = { 
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  
  return axios.post(url, data, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });
}

// deleteBranch
// '/line/deleteBranch/:nodeId/:lineId'
// for instance
// /line/deleteBranch/60c32033e46b792cdc86a643/60c3689c069c0cb5773d9967
// this will delete branch line '60c3689c069c0cb5773d9967' from node '60c32033e46b792cdc86a643'
export function deleteBranch(nodeId, lineId) {
  let url = `${postBaseUrl}/line/deleteBranch/`;
  url = url + nodeId + '/' + lineId;
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  console.log(url)
  console.log(headers)
  
  return axios.delete(url, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });
}

// deleteLine
// also, deletes all node belong to this line
export function deleteLine(lineId) {
  let url = `${postBaseUrl}/line/deleteLine/`;
  url = url + lineId;
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  console.log(url)
  console.log(headers)
  
  return axios.delete(url, {
    headers: headers
  })
  .then((response) => {
	return response.data;
  })
  .catch((error) => {
	return error
  });
}