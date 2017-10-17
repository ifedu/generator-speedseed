import { spawn } from 'child_process'
import { paths } from 'root/core/seed'

spawn('electron', [`./${paths.electron.tmp.file}`], {
    shell: true,
    stdio: 'inherit'
})
