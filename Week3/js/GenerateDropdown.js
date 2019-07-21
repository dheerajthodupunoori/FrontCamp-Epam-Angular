export default function createChannelDropdown(result) {
  let select_channel = document.getElementById("select-channel");
  let count = 0;
  result.forEach(item => {
    if (count == 0) {
      let channel = document.createElement("option");
      channel.setAttribute("value", item.id);
      channel.setAttribute("selected", "selected");
      channel.innerText = item.name;
      select_channel.appendChild(channel);
      count++;
    } else {
      let channel = document.createElement("option");
      channel.setAttribute("value", item.id);
      channel.innerText = item.name;
      select_channel.appendChild(channel);
    }
  });
}
