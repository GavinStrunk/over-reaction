from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from perlin_noise import PerlinNoise
import numpy as np
import random

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get("/map")
async def map():

    height = 100
    width = 100
    seed = 0
    noise_scale = 0.4
    landmass_scale = 0.3

    # You have to explicitly set this if you want to control the random generation
    random.seed(seed)

    random_map = np.zeros((width, height))

    # Create Perlin noise objects
    noise_05 = PerlinNoise(octaves=0.5, seed=seed)
    noise_5 = PerlinNoise(octaves=5, seed=seed)

    for i in range(height):
        for j in range(width):
            # Normalize the coordinates
            x = i / height
            y = j / width
            random_map[i, j] = noise_scale * landmass_scale + noise_05([x, y]) + noise_scale * (1 - landmass_scale) + noise_5([x, y])

    random_map = np.round(random_map)
    data = {
        "map": random_map.tolist(),
    }
    return JSONResponse(data)