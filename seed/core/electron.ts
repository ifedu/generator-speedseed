import { spawn } from 'child_process'
import { paths } from 'root/core/seed'

spawn('electron', [`./${paths.electron.dir}/index`], {
    shell: true,
    stdio: 'inherit'
})
