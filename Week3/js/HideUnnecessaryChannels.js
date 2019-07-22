export default function hideUnnecessaryChannel(selectedChannelsList) {
  selectedChannelsList.forEach(channel => {
    let channelToBeHidden = document.getElementById(channel);
    channelToBeHidden.style.display = "none";
  });
}
