// ---------------------------------------
function myNotify(msg, msgType = 'success') {
    console.log(8888888)
    notie.alert({
        type: msgType, // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
        text: msg,
        stay: false, // optional, default = false
        time: 2, // optional, default = 3, minimum = 1,
        position: 'top' // optional, default = 'top', enum: ['top', 'bottom']
    });
}
    // ---------------------------------------
function myNotifyModal(title, html, icon, confirmButtonText) {

    Swal.fire({
        title: title,
        html: html,
        icon: icon,
        confirmButtonText: confirmButtonText
    })
}
// ---------------------------------------
function myPrompt() {

    // -----------------------------------------------
    // Function to display a toast notification using SweetAlert2
    const toast = (context) => {
        const {
            title = '',
            msg = '',
            footer = '',
        } = context;

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                // Pause timer on mouse enter, resume on mouse leave
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        // Display the toast notification
        Toast.fire({
            icon: "success",
            title: title,
            text: msg,
            footer: footer
        });
    }
    // -----------------------------------------------

    // Function to display a modal message using SweetAlert2
    const modalMsg = (context) => {
        const {
            title = '',
            msg = '',
            html = '',
            footer = '',
            type = '',
            showConfirmButton = true,
        } = context;

        // Display the modal message
        Swal.fire({
            icon: type,
            title: title,
            text: msg,
            html: html,
            footer: footer,
            showConfirmButton: showConfirmButton,

            didOpen: () => {
                const modalCloseBtn = document.getElementById('close-modal');
                if (modalCloseBtn) {
                    modalCloseBtn.addEventListener('click', ()=>{

                        const modal = document.querySelector('.swal2-container');
                        modal.remove();
                    })
                }

            },
        });
    }

    // -----------------------------------------------

    // Function to display a custom modal message with date range picker using SweetAlert2
    const customMsg = async (context) => {

        const {
            title = '',
            msg = '',
            type = '',
        } = context;

        // Display a custom modal with HTML content and date range picker
        const result = await Swal.fire({
            icon: type,
            title: title,
            html: msg,
            backdrop: false,
            focusConfirm: false,
            showCancelButton: true,
            
            willOpen: () => {
                if (context?.functions?.willOpen) {
                    context.functions.willOpen();
                }
            },
            didOpen: () => {
                if (context?.functions?.didOpen) {
                    context.functions.didOpen();
                }
            },
            preConfirm: () => {
                if (context?.functions?.preConfirm) {
                    context.functions.preConfirm();
                }
            },
        });

        // Check if a callback function is provided
        if (!context.functions.callBack) {console.log(1); return; }

        // Handle the result of the custom modal
        if (result.value && result.isConfirmed) {


            const fromDate = result.value[0];
            const toDate = result.value[1];

            if (fromDate !== '' && toDate !== '') {

                // Invoke the callback function with the selected date range
                context.functions.callBack(result.value);

                // Swal.fire(JSON.stringify(result.value));  

            } else {
                context.functions.callBack(false);
            }

        } else {
            context.functions.callBack(false);
        }
    }
    // -----------------------------------------------

    // Return the functions for external use
    return {
        toast: toast,
        modalMsg: modalMsg,
        customMsg: customMsg
    }
}
// ---------------------------------------