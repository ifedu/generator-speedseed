import { spawn } from 'child_process'
import { paths } from 'root/core/seed'

spawn('electron', [`./${paths.electron.index}`], {
    shell: true,
    stdio: 'inherit'
})
