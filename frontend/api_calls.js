//Function for API call to check if a device is registered
function checkDevice(deviceAddress) {
  try {
    var url = "http://localhost:3000/get-device?deviceAddress=" + deviceAddress;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    if (xhr.status !== 400) {
      let device =
        "Device Name: " +
        response.deviceName +
        "<br/>" +
        "Device Id: " +
        response.deviceId +
        "<br/>" +
        "Device Address: " +
        response.deviceAddress +
        "<br/>" +
        "Device Managers: " +
        response.managers;
      return device;
    } else return response.message;
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to register a manager
function registerManager(managerAddress, managerName, currentManager) {
  try {
    var url =
      "http://localhost:3000/register-manager?managerAddress=" +
      managerAddress +
      "&managerName=" +
      managerName +
      "&currentManager=" +
      currentManager;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    return response.message;
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to register a device
function registerDevice(deviceAddress, deviceName, deviceID, currentManager) {
  try {
    var url =
      "http://localhost:3000/register-device?deviceAddress=" +
      deviceAddress +
      "&deviceName=" +
      deviceName +
      "&deviceID=" +
      deviceID +
      "&currentManager=" +
      currentManager;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    return response.message;
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to add a manager to a device
function addManager(deviceID, managerAddress, currentManager) {
  try {
    var url =
      "http://localhost:3000/add-manager?deviceID=" +
      deviceID +
      "&managerAddress=" +
      managerAddress +
      "&currentManager=" +
      currentManager;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    return response.message;
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to remove a manager from a device
function removeManager(deviceID, managerAddress, currentManager) {
  try {
    var url =
      "http://localhost:3000/remove-manager?deviceID=" +
      deviceID +
      "&managerAddress=" +
      managerAddress +
      "&currentManager=" +
      currentManager;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    return response.message;
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to add a rule
function addRule(
  managerAddress,
  constrainedDeviceAddress,
  newDeviceAddress,
  resource,
  accessRights,
  expirationBlocks,
  currentManager
) {
  try {
    var url =
      "http://localhost:3000/add-rule?managerAddress=" +
      managerAddress +
      "&constrainedDeviceAddress=" +
      constrainedDeviceAddress +
      "&newDeviceAddress=" +
      newDeviceAddress +
      "&resource=" +
      resource +
      "&accessRights=" +
      accessRights +
      "&expirationBlocks=" +
      expirationBlocks +
      "&currentManager=" +
      currentManager;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    return response.message;
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to de-register a manager
function deregisterManager(managerAddress, currentManager) {
  try {
    var url =
      "http://localhost:3000/deregister-manager?managerAddress=" +
      managerAddress +
      "&currentManager=" +
      currentManager;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    return response.message;
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to de-register a device
function deregisterDevice(deviceId, currentManager) {
  try {
    var url =
      "http://localhost:3000/deregister-device?deviceId=" +
      deviceId +
      "&currentManager=" +
      currentManager;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    return response.message;
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to revoke a permission (remove a rule)
function revokePermission(
  managerAddress,
  constrainedDeviceAddress,
  newDeviceAddress,
  currentManager
) {
  try {
    var url =
      "http://localhost:3000/revoke-permission?managerAddress=" +
      managerAddress +
      "&constrainedDeviceAddress=" +
      constrainedDeviceAddress +
      "&newDeviceAddress=" +
      newDeviceAddress +
      "&currentManager=" +
      currentManager;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    return response.message;
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to get a manager
function getManager(managerAddress) {
  try {
    var url =
      "http://localhost:3000/get-manager?managerAddress=" + managerAddress;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    if (xhr.status !== 400) {
      var manager =
        "Manager Address: " +
        response.managerAddress +
        "<br/>" +
        "Manager Name: " +
        response.managerName;
      return manager;
    } else {
      return response.message;
    }
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to query a permission
function queryPermission(constrainedDeviceAddress, newDeviceAddress) {
  try {
    var url =
      "http://localhost:3000/query-permission?constrainedDeviceAddress=" +
      constrainedDeviceAddress +
      "&newDeviceAddress=" +
      newDeviceAddress;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    if (xhr.status !== 400) {
      var permission =
        "Allowed: " +
        response.allowed +
        "<br/>" +
        "Access Rights: " +
        response.accessRights +
        "<br/>" +
        "Resource: " +
        response.resource +
        "<br/>" +
        "Remaining Blocks: " +
        response.remainingBlocks;
      return permission;
    } else {
      return response.message;
    }
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to get the IDs of the registered devices
function getDeviceIDs() {
  try {
    var url = "http://localhost:3000/get-device-ids";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    if (xhr.status !== 400) {
      return response.deviceIds;
    } else {
      return response.message;
    }
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to get the addresses of the registered managers
function getManagerAddresses() {
  try {
    var url = "http://localhost:3000/get-manager-addresses";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    if (xhr.status !== 400) {
      return response.managerAddresses;
    } else {
      return response.message;
    }
  } catch (error) {
    console.log(error);
  }
}

//Function for API call to get the addresses of the registered devices
function getDeviceAddresses() {
  try {
    var url = "http://localhost:3000/get-device-addresses";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var response = JSON.parse(xhr.responseText);
    if (xhr.status !== 400) {
      return response.deviceAddresses;
    } else {
      return response.message;
    }
  } catch (error) {
    console.log(error);
  }
}
