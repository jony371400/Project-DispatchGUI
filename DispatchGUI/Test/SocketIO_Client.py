import websockets
import asyncio

url = "ws://127.0.0.1:7890"

async def listen():
    async with websockets.connect(url) as ws:
        await ws.send("Hello Server!")

        # while True:
        #     msg = await ws.recv()
        #     print(msg)

asyncio.get_event_loop().run_until_complete(listen())