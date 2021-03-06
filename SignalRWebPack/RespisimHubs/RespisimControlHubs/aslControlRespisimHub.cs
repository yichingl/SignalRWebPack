﻿using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRWebPack.Hubs
{
    public class AslControlRespisimHub : Hub
    {
        public async Task SawASLStatusChange (string aslState)
        {
            await Clients.All.SendAsync("broadcastASLStatusChange", aslState);
        }
        public async Task SawASLDeviceChange(string aslDevice)
        {
            await Clients.All.SendAsync("broadcastASLDeviceChange", aslDevice);
        }
    }
}