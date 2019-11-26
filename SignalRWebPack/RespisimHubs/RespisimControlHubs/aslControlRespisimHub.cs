using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRWebPack.Hubs
{
    public class AslControlRespisimHub : Hub
    {
        public async Task NewMessage()
        {
            await Clients.All.SendAsync("messageReceived");
        }
    }
}