from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
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
@app.get("/random-data")
async def random_data(num_points: int = Query(10, ge=1, le=1000)):
    data = {
        "x": [i for i in range(num_points)],
        "y": [random.random() for _ in range(num_points)],
    }
    return JSONResponse(content=data)