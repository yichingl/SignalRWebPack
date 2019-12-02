using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRWebPack.Hubs
{
    public class LibraryDataRespisimHub : Hub
    {
        public async Task SawLungModelLibrary(string lungModelLibrary)
        {
            await Clients.All.SendAsync("broadcastLungModelLibrary", lungModelLibrary);
        }
        public async Task SawFirstTimeScenarioLibrary(string scenarioLibrary)
        {
            await Clients.All.SendAsync("broadcastFirstTimeScenarioLibrary", scenarioLibrary);
        }
    }
}