import { agents } from '../data/agents.js';

// ============================
// PIXEL ART GAME ENGINE
// ============================

const TILE = 48;       // px per tile
const COLS = 20;
const ROWS = 12;
const W = COLS * TILE;
const H = ROWS * TILE;

// Floor tile types
const F = 0; // floor
const W_ = 1; // wall
const D = 2; // desk
const CH = 3; // chair
const P = 4; // plant
const S = 5; // server
const CF = 6; // coffee machine
const RG = 7; // rug/carpet
const WN = 8; // window
const BK = 9; // bookshelf
const MN = 10; // monitor on desk
const DR = 11; // door

const officeMap = [
  [W_,WN,W_,W_,WN,W_,W_,WN,W_,W_,W_,WN,W_,W_,WN,W_,W_,WN,W_,W_],
  [W_,RG,RG,RG,RG,RG,W_,RG,RG,RG,RG,RG,W_,RG,RG,RG,RG,RG,RG,W_],
  [W_,RG,MN,F ,MN,RG,W_,RG,MN,F ,MN,RG,W_,RG,S ,S ,F ,F ,BK,W_],
  [W_,RG,D ,F ,D ,RG,DR,RG,D ,F ,D ,RG,DR,RG,S ,S ,F ,F ,BK,W_],
  [W_,RG,CH,F ,CH,RG,F ,RG,CH,F ,CH,RG,F ,RG,F ,F ,F ,F ,F ,W_],
  [W_,RG,F ,F ,F ,RG,F ,RG,F ,F ,F ,RG,F ,F ,F ,F ,F ,F ,F ,W_],
  [W_,F ,F ,F ,F ,F ,F ,F ,F ,F ,F ,F ,F ,F ,F ,F ,F ,F ,F ,W_],
  [W_,F ,P ,F ,F ,F ,F ,F ,F ,P ,F ,F ,F ,F ,CF,F ,F ,P ,F ,W_],
  [W_,RG,MN,F ,MN,RG,F ,F ,RG,MN,F ,MN,RG,F ,F ,F ,F ,F ,F ,W_],
  [W_,RG,D ,F ,D ,RG,F ,F ,RG,D ,F ,D ,RG,F ,F ,BK,BK,F ,F ,W_],
  [W_,RG,CH,F ,CH,RG,F ,F ,RG,CH,F ,CH,RG,F ,F ,F ,F ,F ,F ,W_],
  [W_,W_,W_,W_,W_,W_,W_,DR,W_,W_,W_,W_,W_,W_,W_,W_,W_,W_,W_,W_],
];

// Agent desk positions (tile coords where they sit)
const agentSeats = [
  { id: 'friday',    row: 4, col: 2,  facing: 'up' },
  { id: 'vakeel',    row: 4, col: 4,  facing: 'up' },
  { id: 'analyzer',  row: 4, col: 8,  facing: 'up' },
  { id: 'research',  row: 4, col: 10, facing: 'up' },
  { id: 'comms',     row: 10, col: 2,  facing: 'up' },
  { id: 'webstudio', row: 10, col: 10, facing: 'up' },
];

// ============================
// COLOR PALETTES
// ============================
const COLORS = {
  floorDark: '#16162a',
  floorLight: '#1a1a32',
  wallBase: '#22223a',
  wallTop: '#2a2a48',
  wallAccent: '#1e1e36',
  rug: '#1a2235',
  rugBorder: '#223050',
  deskTop: '#3a2a1a',
  deskFront: '#2a1e14',
  deskSide: '#4a3a28',
  chair: '#2a2a44',
  chairSeat: '#3a3a58',
  monitor: '#0a0a14',
  monitorScreen: '#1a3a28',
  monitorScreenLight: '#2a5a3a',
  monitorFrame: '#333350',
  plant1: '#1a5a2a',
  plant2: '#2a7a3a',
  plant3: '#0a3a1a',
  plantPot: '#5a3a2a',
  server1: '#1a1a3a',
  server2: '#2a2a4a',
  serverLed: '#ff3333',
  serverLedGreen: '#33ff33',
  coffee: '#3a2a1a',
  coffeeTop: '#5a4a3a',
  bookshelf: '#3a2a1a',
  book1: '#5a2a2a',
  book2: '#2a2a5a',
  book3: '#2a5a2a',
  book4: '#5a5a2a',
  windowFrame: '#3a3a5a',
  windowGlass: '#2a4a6a',
  windowGlow: '#4a7aaa',
  doorFrame: '#4a3a2a',
  doorBody: '#3a2a1a',
};

// Agent character color schemes
const CHAR_COLORS = {
  friday:    { skin: '#e8c090', hair: '#00e5ff', shirt: '#1a3a4a', pants: '#1a2a3a', shoes: '#111', accent: '#ff6b35' },
  vakeel:    { skin: '#d4a574', hair: '#2a1a10', shirt: '#1a1a2e', pants: '#1a1a28', shoes: '#111', accent: '#b388ff' },
  analyzer:  { skin: '#e8c090', hair: '#ff6b35', shirt: '#2a1a0a', pants: '#222', shoes: '#111', accent: '#ffaa00' },
  research:  { skin: '#e8c090', hair: '#3a2a1a', shirt: '#1a2a4a', pants: '#1a2040', shoes: '#111', accent: '#448aff' },
  comms:     { skin: '#e8c090', hair: '#4a2a1a', shirt: '#0a2a1a', pants: '#0a2018', shoes: '#111', accent: '#00c853' },
  webstudio: { skin: '#e8c090', hair: '#ffd740', shirt: '#2a2a1a', pants: '#222', shoes: '#111', accent: '#ffe082' },
};

// ============================
// DRAWING FUNCTIONS
// ============================

function drawFloorTile(ctx, x, y) {
  const px = x * TILE;
  const py = y * TILE;
  ctx.fillStyle = (x + y) % 2 === 0 ? COLORS.floorDark : COLORS.floorLight;
  ctx.fillRect(px, py, TILE, TILE);
  // subtle grid line
  ctx.strokeStyle = '#ffffff06';
  ctx.lineWidth = 0.5;
  ctx.strokeRect(px, py, TILE, TILE);
}

function drawWall(ctx, x, y) {
  const px = x * TILE;
  const py = y * TILE;
  // Wall base
  ctx.fillStyle = COLORS.wallBase;
  ctx.fillRect(px, py, TILE, TILE);
  // Top highlight
  ctx.fillStyle = COLORS.wallTop;
  ctx.fillRect(px, py, TILE, 8);
  // Brick pattern
  ctx.fillStyle = COLORS.wallAccent;
  const brickH = 12;
  const offset = y % 2 === 0 ? 0 : TILE / 2;
  for (let by = 8; by < TILE; by += brickH) {
    ctx.fillRect(px + offset, py + by, TILE / 2 - 1, brickH - 1);
  }
  // Bottom border
  ctx.fillStyle = '#14141e';
  ctx.fillRect(px, py + TILE - 2, TILE, 2);
}

function drawWindow(ctx, x, y) {
  drawWall(ctx, x, y);
  const px = x * TILE;
  const py = y * TILE;
  // Window frame
  ctx.fillStyle = COLORS.windowFrame;
  ctx.fillRect(px + 8, py + 6, TILE - 16, TILE - 14);
  // Glass
  ctx.fillStyle = COLORS.windowGlass;
  ctx.fillRect(px + 10, py + 8, TILE - 20, TILE - 18);
  // Reflection
  ctx.fillStyle = COLORS.windowGlow;
  ctx.fillRect(px + 12, py + 10, 6, TILE - 24);
  // Center bar
  ctx.fillStyle = COLORS.windowFrame;
  ctx.fillRect(px + TILE/2 - 1, py + 8, 2, TILE - 18);
}

function drawRug(ctx, x, y) {
  const px = x * TILE;
  const py = y * TILE;
  ctx.fillStyle = COLORS.rug;
  ctx.fillRect(px, py, TILE, TILE);
  ctx.strokeStyle = COLORS.rugBorder;
  ctx.lineWidth = 1;
  ctx.strokeRect(px + 1, py + 1, TILE - 2, TILE - 2);
}

function drawDesk(ctx, x, y) {
  drawRug(ctx, x, y);
  const px = x * TILE;
  const py = y * TILE;
  // Desk top surface
  ctx.fillStyle = COLORS.deskTop;
  ctx.fillRect(px + 2, py + 4, TILE - 4, TILE / 2);
  // Desk front
  ctx.fillStyle = COLORS.deskFront;
  ctx.fillRect(px + 2, py + 4 + TILE/2, TILE - 4, TILE/2 - 8);
  // Legs
  ctx.fillStyle = COLORS.deskSide;
  ctx.fillRect(px + 4, py + TILE - 6, 4, 6);
  ctx.fillRect(px + TILE - 8, py + TILE - 6, 4, 6);
  // Drawer handle
  ctx.fillStyle = '#6a5a48';
  ctx.fillRect(px + TILE/2 - 4, py + TILE/2 + 8, 8, 2);
}

function drawMonitor(ctx, x, y, t) {
  drawRug(ctx, x, y);
  const px = x * TILE;
  const py = y * TILE;
  // Desk surface under monitor
  ctx.fillStyle = COLORS.deskTop;
  ctx.fillRect(px + 2, py + TILE/2, TILE - 4, TILE / 2 - 2);
  // Monitor stand
  ctx.fillStyle = COLORS.monitorFrame;
  ctx.fillRect(px + TILE/2 - 2, py + TILE/2 - 4, 4, 6);
  // Monitor body
  ctx.fillStyle = COLORS.monitorFrame;
  ctx.fillRect(px + 6, py + 4, TILE - 12, TILE/2 - 6);
  // Screen
  ctx.fillStyle = COLORS.monitorScreen;
  ctx.fillRect(px + 8, py + 6, TILE - 16, TILE/2 - 10);
  // Animated screen content — typing effect
  const lines = Math.floor(t / 500) % 4 + 2;
  for (let i = 0; i < lines; i++) {
    const w = 6 + Math.sin(t / 300 + i * 2) * 4 + Math.random() * 2;
    ctx.fillStyle = i === lines - 1 ? '#4aff8a' : COLORS.monitorScreenLight;
    ctx.fillRect(px + 10, py + 8 + i * 4, Math.min(w, TILE - 22), 2);
  }
  // Cursor blink
  if (Math.floor(t / 500) % 2 === 0) {
    ctx.fillStyle = '#4aff8a';
    ctx.fillRect(px + 10 + (lines > 2 ? 12 : 4), py + 8 + (lines - 1) * 4, 2, 3);
  }
  // Desk front
  ctx.fillStyle = COLORS.deskFront;
  ctx.fillRect(px + 2, py + TILE - 2, TILE - 4, 2);
}

function drawChair(ctx, x, y) {
  drawRug(ctx, x, y);
  const px = x * TILE;
  const py = y * TILE;
  // Chair back
  ctx.fillStyle = COLORS.chair;
  ctx.fillRect(px + 10, py + 2, TILE - 20, 14);
  // Chair seat
  ctx.fillStyle = COLORS.chairSeat;
  ctx.fillRect(px + 8, py + 12, TILE - 16, 16);
  // Chair legs
  ctx.fillStyle = '#1a1a30';
  ctx.fillRect(px + 14, py + 28, 4, 10);
  ctx.fillRect(px + TILE - 18, py + 28, 4, 10);
  // Wheels
  ctx.fillStyle = '#333';
  ctx.fillRect(px + 10, py + TILE - 6, 6, 4);
  ctx.fillRect(px + TILE - 16, py + TILE - 6, 6, 4);
}

function drawPlant(ctx, x, y, t) {
  drawFloorTile(ctx, x, y);
  const px = x * TILE;
  const py = y * TILE;
  // Pot
  ctx.fillStyle = COLORS.plantPot;
  ctx.fillRect(px + 14, py + TILE - 16, TILE - 28, 14);
  ctx.fillRect(px + 12, py + TILE - 18, TILE - 24, 4);
  // Leaves — gentle sway
  const sway = Math.sin(t / 1000) * 2;
  ctx.fillStyle = COLORS.plant1;
  ctx.fillRect(px + 16 + sway, py + 8, 8, 14);
  ctx.fillStyle = COLORS.plant2;
  ctx.fillRect(px + 10 - sway, py + 12, 8, 10);
  ctx.fillRect(px + 24 + sway, py + 10, 8, 10);
  ctx.fillStyle = COLORS.plant3;
  ctx.fillRect(px + 18, py + 4, 6, 8);
  ctx.fillRect(px + 12 + sway, py + 6, 6, 6);
}

function drawServer(ctx, x, y, t) {
  drawFloorTile(ctx, x, y);
  const px = x * TILE;
  const py = y * TILE;
  // Server rack body
  ctx.fillStyle = COLORS.server1;
  ctx.fillRect(px + 6, py + 2, TILE - 12, TILE - 4);
  ctx.fillStyle = COLORS.server2;
  ctx.fillRect(px + 8, py + 4, TILE - 16, TILE - 8);
  // Server units
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = '#1a1a34';
    ctx.fillRect(px + 10, py + 6 + i * 10, TILE - 20, 8);
    // Vents
    ctx.fillStyle = '#2a2a4a';
    for (let v = 0; v < 3; v++) {
      ctx.fillRect(px + 12 + v * 6, py + 8 + i * 10, 4, 1);
    }
    // LED indicators - blinking
    const ledOn = (Math.floor(t / (300 + i * 100)) + i) % 3 !== 0;
    ctx.fillStyle = ledOn ? COLORS.serverLedGreen : '#0a2a0a';
    ctx.fillRect(px + TILE - 16, py + 8 + i * 10, 3, 3);
    if (i === 2) {
      ctx.fillStyle = Math.floor(t / 800) % 2 === 0 ? COLORS.serverLed : '#3a0a0a';
      ctx.fillRect(px + TILE - 20, py + 8 + i * 10, 3, 3);
    }
  }
}

function drawCoffee(ctx, x, y, t) {
  drawFloorTile(ctx, x, y);
  const px = x * TILE;
  const py = y * TILE;
  // Coffee machine body
  ctx.fillStyle = COLORS.coffee;
  ctx.fillRect(px + 10, py + 10, TILE - 20, TILE - 14);
  ctx.fillStyle = COLORS.coffeeTop;
  ctx.fillRect(px + 8, py + 8, TILE - 16, 6);
  // Display
  ctx.fillStyle = '#1a3a2a';
  ctx.fillRect(px + 14, py + 16, TILE - 28, 8);
  // Steam
  const steamY = Math.sin(t / 400) * 3;
  ctx.fillStyle = 'rgba(150,150,180,0.3)';
  ctx.fillRect(px + TILE/2 - 2, py + 4 + steamY, 4, 4);
  ctx.fillRect(px + TILE/2 + 2, py + 2 + steamY, 3, 3);
}

function drawBookshelf(ctx, x, y) {
  drawFloorTile(ctx, x, y);
  const px = x * TILE;
  const py = y * TILE;
  // Shelf frame
  ctx.fillStyle = COLORS.bookshelf;
  ctx.fillRect(px + 4, py + 2, TILE - 8, TILE - 4);
  // Shelves
  const bookColors = [COLORS.book1, COLORS.book2, COLORS.book3, COLORS.book4];
  for (let shelf = 0; shelf < 3; shelf++) {
    const sy = py + 4 + shelf * 14;
    ctx.fillStyle = '#4a3a2a';
    ctx.fillRect(px + 6, sy + 12, TILE - 12, 2);
    // Books
    for (let b = 0; b < 4; b++) {
      ctx.fillStyle = bookColors[(shelf + b) % 4];
      const bw = 5 + (b % 2) * 2;
      const bh = 10 + (b % 3);
      ctx.fillRect(px + 8 + b * 8, sy + 12 - bh, bw, bh);
    }
  }
}

function drawDoor(ctx, x, y) {
  drawFloorTile(ctx, x, y);
  const px = x * TILE;
  const py = y * TILE;
  // Door frame
  ctx.fillStyle = COLORS.doorFrame;
  ctx.fillRect(px + 8, py, TILE - 16, TILE);
  // Door body
  ctx.fillStyle = COLORS.doorBody;
  ctx.fillRect(px + 10, py + 2, TILE - 20, TILE - 2);
  // Handle
  ctx.fillStyle = '#8a7a5a';
  ctx.fillRect(px + TILE - 16, py + TILE/2, 3, 4);
}

// ============================
// CHARACTER DRAWING
// ============================

function drawCharacter(ctx, x, y, agentId, t, facing) {
  const c = CHAR_COLORS[agentId];
  if (!c) return;
  
  const px = x * TILE + TILE/2;
  const py = y * TILE;
  
  // Sitting animation offsets
  const breathe = Math.sin(t / 800 + x) * 0.5;
  const typing = agentId === 'friday' || agentId === 'vakeel' || agentId === 'webstudio' || agentId === 'analyzer';
  const armOffset = typing ? Math.sin(t / 150 + x * 3) * 1.5 : 0;
  
  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.fillRect(px - 8, py + TILE - 4, 16, 4);
  
  // Legs (sitting)
  ctx.fillStyle = c.pants;
  ctx.fillRect(px - 6, py + 28, 5, 10);
  ctx.fillRect(px + 1, py + 28, 5, 10);
  // Shoes
  ctx.fillStyle = c.shoes;
  ctx.fillRect(px - 7, py + 36, 6, 4);
  ctx.fillRect(px + 1, py + 36, 6, 4);
  
  // Body / torso
  ctx.fillStyle = c.shirt;
  ctx.fillRect(px - 7, py + 14 + breathe, 14, 16);
  
  // Arms
  ctx.fillStyle = c.shirt;
  ctx.fillRect(px - 10, py + 16, 4, 10 + armOffset);
  ctx.fillRect(px + 6, py + 16, 4, 10 - armOffset);
  // Hands
  ctx.fillStyle = c.skin;
  ctx.fillRect(px - 10, py + 24 + armOffset, 4, 4);
  ctx.fillRect(px + 6, py + 24 - armOffset, 4, 4);
  
  // Collar / accent
  ctx.fillStyle = c.accent;
  ctx.fillRect(px - 3, py + 14 + breathe, 6, 3);
  
  // Head
  ctx.fillStyle = c.skin;
  ctx.fillRect(px - 6, py + 2, 12, 12);
  
  // Hair
  ctx.fillStyle = c.hair;
  if (agentId === 'vakeel') {
    // Turban/cap style
    ctx.fillRect(px - 7, py - 2, 14, 6);
    ctx.fillRect(px - 6, py + 2, 12, 3);
  } else if (agentId === 'webstudio') {
    // Beanie
    ctx.fillRect(px - 7, py - 1, 14, 5);
    ctx.fillRect(px - 6, py + 2, 12, 2);
  } else if (agentId === 'analyzer') {
    // Visor/goggles
    ctx.fillRect(px - 6, py, 12, 4);
    ctx.fillStyle = c.accent;
    ctx.fillRect(px - 7, py + 4, 14, 3);
    ctx.fillStyle = '#fff';
    ctx.fillRect(px - 5, py + 4, 4, 2);
    ctx.fillRect(px + 2, py + 4, 4, 2);
  } else {
    // Standard hair
    ctx.fillRect(px - 6, py, 12, 5);
    ctx.fillRect(px - 7, py + 2, 2, 4);
    ctx.fillRect(px + 5, py + 2, 2, 4);
  }
  
  // Eyes
  ctx.fillStyle = '#fff';
  ctx.fillRect(px - 4, py + 6, 3, 3);
  ctx.fillRect(px + 1, py + 6, 3, 3);
  // Pupils — look toward monitor (up)
  ctx.fillStyle = '#111';
  const lookX = Math.sin(t / 2000 + x) * 0.5;
  ctx.fillRect(px - 3 + lookX, py + 6, 2, 2);
  ctx.fillRect(px + 2 + lookX, py + 6, 2, 2);
  
  // Mouth
  ctx.fillStyle = '#c07050';
  ctx.fillRect(px - 1, py + 10, 3, 1);
}

// ============================
// SPEECH BUBBLE
// ============================

function drawSpeechBubble(ctx, x, y, text, t) {
  const px = x * TILE + TILE/2;
  const py = y * TILE - 8;
  
  // Only show intermittently
  const phase = Math.floor(t / 4000 + x * 1.7) % 6;
  if (phase > 1) return;
  
  const alpha = phase === 0 ? Math.min((t % 4000) / 500, 1) : Math.max(1 - ((t % 4000) - 3500) / 500, 0);
  
  ctx.save();
  ctx.globalAlpha = alpha;
  
  // Bubble
  ctx.fillStyle = 'rgba(20,20,40,0.9)';
  const tw = ctx.measureText(text).width;
  const bw = Math.max(tw + 12, 40);
  ctx.fillRect(px - bw/2, py - 20, bw, 16);
  ctx.fillStyle = 'rgba(20,20,40,0.9)';
  ctx.fillRect(px - 3, py - 6, 6, 6);
  
  // Text
  ctx.fillStyle = '#aaaacc';
  ctx.font = '8px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText(text, px, py - 9);
  
  ctx.restore();
}

// ============================
// ROOM LABELS
// ============================

function drawRoomLabels(ctx) {
  ctx.save();
  ctx.font = '600 9px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(100,100,140,0.5)';
  
  ctx.fillText('COMMAND ROOM', 3 * TILE, 1.5 * TILE);
  ctx.fillText('RESEARCH LAB', 9.5 * TILE, 1.5 * TILE);
  ctx.fillText('SERVER ROOM', 16 * TILE, 1.5 * TILE);
  ctx.fillText('OPS CENTER', 3 * TILE, 8 * TILE);
  ctx.fillText('DEV LAB', 10 * TILE, 8 * TILE);
  ctx.fillText('LOUNGE', 16 * TILE, 7.5 * TILE);
  
  ctx.restore();
}

// ============================
// MAIN RENDER LOOP
// ============================

let animFrame;
let canvas, canvasCtx;
let scale = 1;

function renderFrame(t) {
  const ctx = canvasCtx;
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.scale(scale, scale);
  
  // Draw tile map
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const tile = officeMap[y][x];
      switch (tile) {
        case W_: drawWall(ctx, x, y); break;
        case WN: drawWindow(ctx, x, y); break;
        case RG: drawRug(ctx, x, y); break;
        case D:  drawDesk(ctx, x, y); break;
        case MN: drawMonitor(ctx, x, y, t); break;
        case CH: drawChair(ctx, x, y); break;
        case P:  drawPlant(ctx, x, y, t); break;
        case S:  drawServer(ctx, x, y, t); break;
        case CF: drawCoffee(ctx, x, y, t); break;
        case BK: drawBookshelf(ctx, x, y); break;
        case DR: drawDoor(ctx, x, y); break;
        default: drawFloorTile(ctx, x, y); break;
      }
    }
  }
  
  // Draw room labels
  drawRoomLabels(ctx);
  
  // Draw agents at their seats — use real agent data
  agentSeats.forEach((seat) => {
    const agent = agents.find(a => a.id === seat.id);
    if (!agent) return;
    
    drawCharacter(ctx, seat.col, seat.row, seat.id, t, seat.facing);
    
    // Draw agent name label below character
    const px = seat.col * TILE + TILE / 2;
    const py = seat.row * TILE + TILE + 2;
    ctx.save();
    ctx.font = 'bold 9px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    // Name background
    const nameWidth = ctx.measureText(agent.name).width + 8;
    ctx.fillStyle = 'rgba(10, 10, 20, 0.8)';
    ctx.fillRect(px - nameWidth / 2, py, nameWidth, 13);
    // Name text
    ctx.fillStyle = agent.color || '#aaaacc';
    ctx.fillText(agent.name, px, py + 2);
    ctx.restore();
    
    // Speech bubble with real task info
    const taskShort = agent.currentTask.length > 20
      ? agent.currentTask.substring(0, 18) + '…'
      : agent.currentTask;
    drawSpeechBubble(ctx, seat.col, seat.row, taskShort, t);
  });
  
  ctx.restore();
  animFrame = requestAnimationFrame(renderFrame);
}

// ============================
// PAGE EXPORT
// ============================

export function renderOffice() {
  return `
    <div class="animate-in">
      <h2 class="page-title">Virtual Office</h2>
      <div class="office-container">
        <div class="office-canvas-wrap" id="officeCanvasWrap">
          <canvas id="officeCanvas"></canvas>
        </div>
        <div class="office-legend">
          <div class="office-legend-card">
            <h3>🏢 Agent Roster</h3>
            ${agents.map(agent => `
              <div class="office-legend-item">
                <div class="office-legend-avatar" style="background: ${agent.bgColor}; color: ${agent.color};">
                  ${agent.letter}
                </div>
                <div class="office-legend-info">
                  <div class="name">${agent.name}</div>
                  <div class="desk">${agent.desk}</div>
                </div>
                <span class="status-dot ${agent.status}"></span>
              </div>
            `).join('')}
          </div>
          <div class="office-legend-card">
            <h3>🗺️ Rooms</h3>
            <div class="office-legend-item"><span style="color: var(--cyan);">◆</span><div class="office-legend-info"><div class="name">Command Room</div><div class="desk">Friday & Vakeel Saab</div></div></div>
            <div class="office-legend-item"><span style="color: var(--blue);">◆</span><div class="office-legend-info"><div class="name">Research Lab</div><div class="desk">Image Analyzer & Research Cell</div></div></div>
            <div class="office-legend-item"><span style="color: var(--red);">◆</span><div class="office-legend-info"><div class="name">Server Room</div><div class="desk">RudraHash Infrastructure</div></div></div>
            <div class="office-legend-item"><span style="color: var(--green);">◆</span><div class="office-legend-info"><div class="name">Ops Center</div><div class="desk">Comms Studio</div></div></div>
            <div class="office-legend-item"><span style="color: var(--yellow);">◆</span><div class="office-legend-info"><div class="name">Dev Lab</div><div class="desk">Web Studio</div></div></div>
            <div class="office-legend-item"><span style="color: var(--orange);">◆</span><div class="office-legend-info"><div class="name">Lounge</div><div class="desk">Coffee & Library</div></div></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

let resizeObserver;

function resizeCanvas() {
  const wrap = document.getElementById('officeCanvasWrap');
  if (!wrap || !canvas) return;
  const rect = wrap.getBoundingClientRect();
  // Scale to fill the container while maintaining aspect ratio
  const scaleX = rect.width / W;
  const scaleY = rect.height / H;
  scale = Math.max(scaleX, scaleY);
  canvas.width = Math.round(W * scale);
  canvas.height = Math.round(H * scale);
  canvas.style.width = canvas.width + 'px';
  canvas.style.height = canvas.height + 'px';
  if (canvasCtx) canvasCtx.imageSmoothingEnabled = false;
}

export function initOffice() {
  canvas = document.getElementById('officeCanvas');
  if (!canvas) return;
  canvasCtx = canvas.getContext('2d');
  canvasCtx.imageSmoothingEnabled = false;
  resizeCanvas();
  renderFrame(0);
  
  // Auto-resize on container change
  const wrap = document.getElementById('officeCanvasWrap');
  if (wrap && typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => resizeCanvas());
    resizeObserver.observe(wrap);
  }
}

export function destroyOffice() {
  if (animFrame) {
    cancelAnimationFrame(animFrame);
    animFrame = null;
  }
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
}

