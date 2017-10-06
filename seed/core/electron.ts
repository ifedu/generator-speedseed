import { spawn } from 'child_process'

spawn('electron', ['./electron/index'], {
    shell: true,
    stdio: 'inherit'
})
