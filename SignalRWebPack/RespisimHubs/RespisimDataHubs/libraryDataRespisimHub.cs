using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRWebPack.Hubs
{
    public class LibraryDataRespisimHub : Hub
    {
        public async Task SawFirstTimeScenarioLibrary()
        {
            await Clients.All.SendAsync("broadcastFirstTimeScenarioLibrary");
        }
    }
}