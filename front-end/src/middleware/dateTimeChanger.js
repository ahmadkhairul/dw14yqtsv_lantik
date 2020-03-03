function ToTime(time) {
  var time = time.split(":");

  var hours = time[0];
  var minutes = time[1];

  return hours + ":" + minutes;
}

export { ToTime };
