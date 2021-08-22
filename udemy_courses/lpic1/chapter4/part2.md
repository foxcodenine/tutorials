### Commands

    man uname

    uname -r

    uname -m

    uname -a

    lscpu

    man cat

    udev

#### The Kernel

The kernel is the core of the operating system, the kernel is responsible for memory management, process management, multitasking, input and output operations, everything that is somehow related to the hardware. 

The kernel has a modular structure and is a monolithic kernel. The kernel, also has the drivers for the hardware components and these drivers are outsourced to individual so-called modules. The special thing is that these modules can be loaded into the kernel or unloaded at runtime so you can only run the modules you need yourself.

Modules that are not required are simply simply removed from the kernel, which of course can save a lot of resources.


#### /proc Directory

This directory is a virtual directory that is only available during runtime. It represents the processes that are currently running, the corresponding files and directories are not stored on the hard disk, but only in the working memory.This directory will be deleted as soon as the system is shut down.

Most of the settings are, of course, only readable, and there is little point in changing the setting since the changes made are deleted again as soon as the system has been restarted.

We see various subdirectories, all of which only. Have certain numbers as names, these numbers are so called PED's represents process I.D., each process that is started has to have its own process. So these numbers are all certain processes that are currently running. There are certain commands that can be used to find out what a particular I.D.

#### /sys Directory

Similar to the proc, sys directory is a Virtal System again, files and directories are not stored on the hard disk, but in the working memory, why the project directory mainly contains processors. The directorate contains information about system hardware and kernel modules. Process information is not listed here.


#### /dev Directory

Def stands for devices. The /dev directory contains the special device files for all the devices. The device files are created during installation

udev (userspace /dev) is a device manager for the Linux kernel which Linux manages the device files. For example, hot plug device is plugged in.

What is the difference between hot plug and cold plug devices? 

A hot plug device is a hardware device that can be connected to the system during runtime and also can be used immediately. For example, a USB stick.

A cold plug device is a device that can only be plugged in when the computer is switched off. That would be, for example, an ede hard drive that would have been installed separately. You can't do that during runtime.

When a hot plot device is plugged in, you'd get the information from the sys directory and report this to the dbus system.

Dbus is a program that sends messages back and forth between different applications and informs them about events udef, for example use dbus to inform the user and the system when you hardwares is connect.

