
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Grafika" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Grafika.html">Grafika</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Grafika_DrawingObject" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Grafika/DrawingObject.html">DrawingObject</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Grafika_DrawingObject_CubicBezier" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Grafika/DrawingObject/CubicBezier.html">CubicBezier</a>                    </div>                </li>                            <li data-name="class:Grafika_DrawingObject_Ellipse" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Grafika/DrawingObject/Ellipse.html">Ellipse</a>                    </div>                </li>                            <li data-name="class:Grafika_DrawingObject_Line" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Grafika/DrawingObject/Line.html">Line</a>                    </div>                </li>                            <li data-name="class:Grafika_DrawingObject_Polygon" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Grafika/DrawingObject/Polygon.html">Polygon</a>                    </div>                </li>                            <li data-name="class:Grafika_DrawingObject_QuadraticBezier" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Grafika/DrawingObject/QuadraticBezier.html">QuadraticBezier</a>                    </div>                </li>                            <li data-name="class:Grafika_DrawingObject_Rectangle" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Grafika/DrawingObject/Rectangle.html">Rectangle</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Grafika_Gd" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Grafika/Gd.html">Gd</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Grafika_Gd_DrawingObject" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Grafika/Gd/DrawingObject.html">DrawingObject</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Grafika_Gd_DrawingObject_CubicBezier" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/DrawingObject/CubicBezier.html">CubicBezier</a>                    </div>                </li>                            <li data-name="class:Grafika_Gd_DrawingObject_Ellipse" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/DrawingObject/Ellipse.html">Ellipse</a>                    </div>                </li>                            <li data-name="class:Grafika_Gd_DrawingObject_Line" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/DrawingObject/Line.html">Line</a>                    </div>                </li>                            <li data-name="class:Grafika_Gd_DrawingObject_Polygon" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/DrawingObject/Polygon.html">Polygon</a>                    </div>                </li>                            <li data-name="class:Grafika_Gd_DrawingObject_QuadraticBezier" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/DrawingObject/QuadraticBezier.html">QuadraticBezier</a>                    </div>                </li>                            <li data-name="class:Grafika_Gd_DrawingObject_Rectangle" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/DrawingObject/Rectangle.html">Rectangle</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Grafika_Gd_Filter" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Grafika/Gd/Filter.html">Filter</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Grafika_Gd_Filter_Dither" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/Filter/Dither.html">Dither</a>                    </div>                </li>                            <li data-name="class:Grafika_Gd_Filter_Grayscale" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/Filter/Grayscale.html">Grayscale</a>                    </div>                </li>                            <li data-name="class:Grafika_Gd_Filter_Sobel" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/Filter/Sobel.html">Sobel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Grafika_Gd_ImageHash" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Grafika/Gd/ImageHash.html">ImageHash</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Grafika_Gd_ImageHash_AverageHash" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/ImageHash/AverageHash.html">AverageHash</a>                    </div>                </li>                            <li data-name="class:Grafika_Gd_ImageHash_DifferenceHash" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Gd/ImageHash/DifferenceHash.html">DifferenceHash</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Grafika_Gd_Editor" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Grafika/Gd/Editor.html">Editor</a>                    </div>                </li>                            <li data-name="class:Grafika_Gd_Image" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Grafika/Gd/Image.html">Image</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Grafika_Imagick" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Grafika/Imagick.html">Imagick</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Grafika_Imagick_DrawingObject" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Grafika/Imagick/DrawingObject.html">DrawingObject</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Grafika_Imagick_DrawingObject_CubicBezier" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/DrawingObject/CubicBezier.html">CubicBezier</a>                    </div>                </li>                            <li data-name="class:Grafika_Imagick_DrawingObject_Ellipse" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/DrawingObject/Ellipse.html">Ellipse</a>                    </div>                </li>                            <li data-name="class:Grafika_Imagick_DrawingObject_Line" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/DrawingObject/Line.html">Line</a>                    </div>                </li>                            <li data-name="class:Grafika_Imagick_DrawingObject_Polygon" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/DrawingObject/Polygon.html">Polygon</a>                    </div>                </li>                            <li data-name="class:Grafika_Imagick_DrawingObject_QuadraticBezier" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/DrawingObject/QuadraticBezier.html">QuadraticBezier</a>                    </div>                </li>                            <li data-name="class:Grafika_Imagick_DrawingObject_Rectangle" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/DrawingObject/Rectangle.html">Rectangle</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Grafika_Imagick_Filter" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Grafika/Imagick/Filter.html">Filter</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Grafika_Imagick_Filter_Dither" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/Filter/Dither.html">Dither</a>                    </div>                </li>                            <li data-name="class:Grafika_Imagick_Filter_Grayscale" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/Filter/Grayscale.html">Grayscale</a>                    </div>                </li>                            <li data-name="class:Grafika_Imagick_Filter_Sobel" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/Filter/Sobel.html">Sobel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Grafika_Imagick_ImageHash" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Grafika/Imagick/ImageHash.html">ImageHash</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Grafika_Imagick_ImageHash_AverageHash" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/ImageHash/AverageHash.html">AverageHash</a>                    </div>                </li>                            <li data-name="class:Grafika_Imagick_ImageHash_DifferenceHash" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Grafika/Imagick/ImageHash/DifferenceHash.html">DifferenceHash</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Grafika_Imagick_Editor" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Grafika/Imagick/Editor.html">Editor</a>                    </div>                </li>                            <li data-name="class:Grafika_Imagick_Image" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Grafika/Imagick/Image.html">Image</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Grafika_Color" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Grafika/Color.html">Color</a>                    </div>                </li>                            <li data-name="class:Grafika_DrawingObjectInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Grafika/DrawingObjectInterface.html">DrawingObjectInterface</a>                    </div>                </li>                            <li data-name="class:Grafika_EditorInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Grafika/EditorInterface.html">EditorInterface</a>                    </div>                </li>                            <li data-name="class:Grafika_FilterInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Grafika/FilterInterface.html">FilterInterface</a>                    </div>                </li>                            <li data-name="class:Grafika_Grafika" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Grafika/Grafika.html">Grafika</a>                    </div>                </li>                            <li data-name="class:Grafika_ImageInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Grafika/ImageInterface.html">ImageInterface</a>                    </div>                </li>                            <li data-name="class:Grafika_ImageType" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Grafika/ImageType.html">ImageType</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Grafika.html", "name": "Grafika", "doc": "Namespace Grafika"},{"type": "Namespace", "link": "Grafika/DrawingObject.html", "name": "Grafika\\DrawingObject", "doc": "Namespace Grafika\\DrawingObject"},{"type": "Namespace", "link": "Grafika/Gd.html", "name": "Grafika\\Gd", "doc": "Namespace Grafika\\Gd"},{"type": "Namespace", "link": "Grafika/Gd/DrawingObject.html", "name": "Grafika\\Gd\\DrawingObject", "doc": "Namespace Grafika\\Gd\\DrawingObject"},{"type": "Namespace", "link": "Grafika/Gd/Filter.html", "name": "Grafika\\Gd\\Filter", "doc": "Namespace Grafika\\Gd\\Filter"},{"type": "Namespace", "link": "Grafika/Gd/ImageHash.html", "name": "Grafika\\Gd\\ImageHash", "doc": "Namespace Grafika\\Gd\\ImageHash"},{"type": "Namespace", "link": "Grafika/Imagick.html", "name": "Grafika\\Imagick", "doc": "Namespace Grafika\\Imagick"},{"type": "Namespace", "link": "Grafika/Imagick/DrawingObject.html", "name": "Grafika\\Imagick\\DrawingObject", "doc": "Namespace Grafika\\Imagick\\DrawingObject"},{"type": "Namespace", "link": "Grafika/Imagick/Filter.html", "name": "Grafika\\Imagick\\Filter", "doc": "Namespace Grafika\\Imagick\\Filter"},{"type": "Namespace", "link": "Grafika/Imagick/ImageHash.html", "name": "Grafika\\Imagick\\ImageHash", "doc": "Namespace Grafika\\Imagick\\ImageHash"},
            {"type": "Interface", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/DrawingObjectInterface.html", "name": "Grafika\\DrawingObjectInterface", "doc": "&quot;Interface DrawingObjectInterface&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\DrawingObjectInterface", "fromLink": "Grafika/DrawingObjectInterface.html", "link": "Grafika/DrawingObjectInterface.html#method_draw", "name": "Grafika\\DrawingObjectInterface::draw", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/EditorInterface.html", "name": "Grafika\\EditorInterface", "doc": "&quot;Interface EditorInterface&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_apply", "name": "Grafika\\EditorInterface::apply", "doc": "&quot;Apply a filter to the image. See Filters section for a list of available filters.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_blank", "name": "Grafika\\EditorInterface::blank", "doc": "&quot;Create a blank image given width and height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_compare", "name": "Grafika\\EditorInterface::compare", "doc": "&quot;Compare two images and returns a hamming distance. A value of 0 indicates a likely similar picture. A value between 1 and 10 is potentially a variation. A value greater than 10 is likely a different image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_crop", "name": "Grafika\\EditorInterface::crop", "doc": "&quot;Crop the image to the given dimension and position.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_draw", "name": "Grafika\\EditorInterface::draw", "doc": "&quot;Draw a DrawingObject on the image. See Drawing Objects section.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_equal", "name": "Grafika\\EditorInterface::equal", "doc": "&quot;Compare if two images are equal. It will compare if the two images are of the same width and height. If the dimensions differ, it will return false. If the dimensions are equal, it will loop through each pixels. If one of the pixel don&#039;t match, it will return false. The pixels are compared using their RGB (Red, Green, Blue) values.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_fill", "name": "Grafika\\EditorInterface::fill", "doc": "&quot;Fill entire image with color.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_free", "name": "Grafika\\EditorInterface::free", "doc": "&quot;Free the current image clearing resources associated with it.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_getImage", "name": "Grafika\\EditorInterface::getImage", "doc": "&quot;Get image instance.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_isAvailable", "name": "Grafika\\EditorInterface::isAvailable", "doc": "&quot;Checks the PHP install if the editor is available.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_opacity", "name": "Grafika\\EditorInterface::opacity", "doc": "&quot;Change the image opacity.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_open", "name": "Grafika\\EditorInterface::open", "doc": "&quot;Opens an image file for manipulation specified by $target.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_openImage", "name": "Grafika\\EditorInterface::openImage", "doc": "&quot;Open an image by passing an instance of Image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_openFile", "name": "Grafika\\EditorInterface::openFile", "doc": "&quot;Open an image by passing a file system path.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_overlay", "name": "Grafika\\EditorInterface::overlay", "doc": "&quot;Overlay an image on top of the current image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resize", "name": "Grafika\\EditorInterface::resize", "doc": "&quot;Wrapper function for the resizeXXX family of functions. Resize an image to a given width, height and mode.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resizeExact", "name": "Grafika\\EditorInterface::resizeExact", "doc": "&quot;Resize image to exact dimensions ignoring aspect ratio. Useful if you want to force exact width and height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resizeExactHeight", "name": "Grafika\\EditorInterface::resizeExactHeight", "doc": "&quot;Resize image to exact height. Width is auto calculated. Useful for creating row of images with the same height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resizeExactWidth", "name": "Grafika\\EditorInterface::resizeExactWidth", "doc": "&quot;Resize image to exact width. Height is auto calculated. Useful for creating column of images with the same width.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resizeFill", "name": "Grafika\\EditorInterface::resizeFill", "doc": "&quot;Resize image to fill all the space in the given dimension. Excess parts are cropped.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resizeFit", "name": "Grafika\\EditorInterface::resizeFit", "doc": "&quot;Resize an image to fit within the given width and height. The re-sized image will not exceed the given dimension. Useful if you want to preserve the aspect ratio.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_rotate", "name": "Grafika\\EditorInterface::rotate", "doc": "&quot;Rotate an image counter-clockwise.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_save", "name": "Grafika\\EditorInterface::save", "doc": "&quot;Save the image to an image format.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_setImage", "name": "Grafika\\EditorInterface::setImage", "doc": "&quot;Set image instance.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_text", "name": "Grafika\\EditorInterface::text", "doc": "&quot;Write text to image.&quot;"},
            
            {"type": "Interface", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/FilterInterface.html", "name": "Grafika\\FilterInterface", "doc": "&quot;Interface FilterInterface&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\FilterInterface", "fromLink": "Grafika/FilterInterface.html", "link": "Grafika/FilterInterface.html#method_apply", "name": "Grafika\\FilterInterface::apply", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/ImageInterface.html", "name": "Grafika\\ImageInterface", "doc": "&quot;Interface ImageInterface&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_createFromFile", "name": "Grafika\\ImageInterface::createFromFile", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_createBlank", "name": "Grafika\\ImageInterface::createBlank", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_getCore", "name": "Grafika\\ImageInterface::getCore", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_getImageFile", "name": "Grafika\\ImageInterface::getImageFile", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_getWidth", "name": "Grafika\\ImageInterface::getWidth", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_getHeight", "name": "Grafika\\ImageInterface::getHeight", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_getType", "name": "Grafika\\ImageInterface::getType", "doc": "&quot;&quot;"},
            
            
            {"type": "Class", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/Color.html", "name": "Grafika\\Color", "doc": "&quot;Holds the color information.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Color", "fromLink": "Grafika/Color.html", "link": "Grafika/Color.html#method___construct", "name": "Grafika\\Color::__construct", "doc": "&quot;Color constructor.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Color", "fromLink": "Grafika/Color.html", "link": "Grafika/Color.html#method_getRgb", "name": "Grafika\\Color::getRgb", "doc": "&quot;Get RGB array&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Color", "fromLink": "Grafika/Color.html", "link": "Grafika/Color.html#method_getRgba", "name": "Grafika\\Color::getRgba", "doc": "&quot;Get RGBA array&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Color", "fromLink": "Grafika/Color.html", "link": "Grafika/Color.html#method_hexToRgb", "name": "Grafika\\Color::hexToRgb", "doc": "&quot;Convert hex string to RGB&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Color", "fromLink": "Grafika/Color.html", "link": "Grafika/Color.html#method_getHexString", "name": "Grafika\\Color::getHexString", "doc": "&quot;Get hex string.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Color", "fromLink": "Grafika/Color.html", "link": "Grafika/Color.html#method_setHexString", "name": "Grafika\\Color::setHexString", "doc": "&quot;Set hex string.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Color", "fromLink": "Grafika/Color.html", "link": "Grafika/Color.html#method_getAlpha", "name": "Grafika\\Color::getAlpha", "doc": "&quot;Alpha value.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Color", "fromLink": "Grafika/Color.html", "link": "Grafika/Color.html#method_setAlpha", "name": "Grafika\\Color::setAlpha", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/DrawingObjectInterface.html", "name": "Grafika\\DrawingObjectInterface", "doc": "&quot;Interface DrawingObjectInterface&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\DrawingObjectInterface", "fromLink": "Grafika/DrawingObjectInterface.html", "link": "Grafika/DrawingObjectInterface.html#method_draw", "name": "Grafika\\DrawingObjectInterface::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\DrawingObject", "fromLink": "Grafika/DrawingObject.html", "link": "Grafika/DrawingObject/CubicBezier.html", "name": "Grafika\\DrawingObject\\CubicBezier", "doc": "&quot;Base class&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\DrawingObject\\CubicBezier", "fromLink": "Grafika/DrawingObject/CubicBezier.html", "link": "Grafika/DrawingObject/CubicBezier.html#method___construct", "name": "Grafika\\DrawingObject\\CubicBezier::__construct", "doc": "&quot;Creates a cubic bezier. Cubic bezier has 2 control points.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\CubicBezier", "fromLink": "Grafika/DrawingObject/CubicBezier.html", "link": "Grafika/DrawingObject/CubicBezier.html#method_getPoint1", "name": "Grafika\\DrawingObject\\CubicBezier::getPoint1", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\CubicBezier", "fromLink": "Grafika/DrawingObject/CubicBezier.html", "link": "Grafika/DrawingObject/CubicBezier.html#method_getControl1", "name": "Grafika\\DrawingObject\\CubicBezier::getControl1", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\CubicBezier", "fromLink": "Grafika/DrawingObject/CubicBezier.html", "link": "Grafika/DrawingObject/CubicBezier.html#method_getControl2", "name": "Grafika\\DrawingObject\\CubicBezier::getControl2", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\CubicBezier", "fromLink": "Grafika/DrawingObject/CubicBezier.html", "link": "Grafika/DrawingObject/CubicBezier.html#method_getPoint2", "name": "Grafika\\DrawingObject\\CubicBezier::getPoint2", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\CubicBezier", "fromLink": "Grafika/DrawingObject/CubicBezier.html", "link": "Grafika/DrawingObject/CubicBezier.html#method_getColor", "name": "Grafika\\DrawingObject\\CubicBezier::getColor", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\DrawingObject", "fromLink": "Grafika/DrawingObject.html", "link": "Grafika/DrawingObject/Ellipse.html", "name": "Grafika\\DrawingObject\\Ellipse", "doc": "&quot;Base class&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\DrawingObject\\Ellipse", "fromLink": "Grafika/DrawingObject/Ellipse.html", "link": "Grafika/DrawingObject/Ellipse.html#method___construct", "name": "Grafika\\DrawingObject\\Ellipse::__construct", "doc": "&quot;Creates an ellipse.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Ellipse", "fromLink": "Grafika/DrawingObject/Ellipse.html", "link": "Grafika/DrawingObject/Ellipse.html#method_getWidth", "name": "Grafika\\DrawingObject\\Ellipse::getWidth", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Ellipse", "fromLink": "Grafika/DrawingObject/Ellipse.html", "link": "Grafika/DrawingObject/Ellipse.html#method_getHeight", "name": "Grafika\\DrawingObject\\Ellipse::getHeight", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Ellipse", "fromLink": "Grafika/DrawingObject/Ellipse.html", "link": "Grafika/DrawingObject/Ellipse.html#method_getPos", "name": "Grafika\\DrawingObject\\Ellipse::getPos", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Ellipse", "fromLink": "Grafika/DrawingObject/Ellipse.html", "link": "Grafika/DrawingObject/Ellipse.html#method_getBorderSize", "name": "Grafika\\DrawingObject\\Ellipse::getBorderSize", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Ellipse", "fromLink": "Grafika/DrawingObject/Ellipse.html", "link": "Grafika/DrawingObject/Ellipse.html#method_getFillColor", "name": "Grafika\\DrawingObject\\Ellipse::getFillColor", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Ellipse", "fromLink": "Grafika/DrawingObject/Ellipse.html", "link": "Grafika/DrawingObject/Ellipse.html#method_getBorderColor", "name": "Grafika\\DrawingObject\\Ellipse::getBorderColor", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\DrawingObject", "fromLink": "Grafika/DrawingObject.html", "link": "Grafika/DrawingObject/Line.html", "name": "Grafika\\DrawingObject\\Line", "doc": "&quot;Base class&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\DrawingObject\\Line", "fromLink": "Grafika/DrawingObject/Line.html", "link": "Grafika/DrawingObject/Line.html#method___construct", "name": "Grafika\\DrawingObject\\Line::__construct", "doc": "&quot;Creates a line.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Line", "fromLink": "Grafika/DrawingObject/Line.html", "link": "Grafika/DrawingObject/Line.html#method_getPoint1", "name": "Grafika\\DrawingObject\\Line::getPoint1", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Line", "fromLink": "Grafika/DrawingObject/Line.html", "link": "Grafika/DrawingObject/Line.html#method_getPoint2", "name": "Grafika\\DrawingObject\\Line::getPoint2", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Line", "fromLink": "Grafika/DrawingObject/Line.html", "link": "Grafika/DrawingObject/Line.html#method_getThickness", "name": "Grafika\\DrawingObject\\Line::getThickness", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Line", "fromLink": "Grafika/DrawingObject/Line.html", "link": "Grafika/DrawingObject/Line.html#method_getColor", "name": "Grafika\\DrawingObject\\Line::getColor", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\DrawingObject", "fromLink": "Grafika/DrawingObject.html", "link": "Grafika/DrawingObject/Polygon.html", "name": "Grafika\\DrawingObject\\Polygon", "doc": "&quot;Base class&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\DrawingObject\\Polygon", "fromLink": "Grafika/DrawingObject/Polygon.html", "link": "Grafika/DrawingObject/Polygon.html#method___construct", "name": "Grafika\\DrawingObject\\Polygon::__construct", "doc": "&quot;Creates a polygon.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Polygon", "fromLink": "Grafika/DrawingObject/Polygon.html", "link": "Grafika/DrawingObject/Polygon.html#method_getWidth", "name": "Grafika\\DrawingObject\\Polygon::getWidth", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Polygon", "fromLink": "Grafika/DrawingObject/Polygon.html", "link": "Grafika/DrawingObject/Polygon.html#method_getHeight", "name": "Grafika\\DrawingObject\\Polygon::getHeight", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Polygon", "fromLink": "Grafika/DrawingObject/Polygon.html", "link": "Grafika/DrawingObject/Polygon.html#method_getPoints", "name": "Grafika\\DrawingObject\\Polygon::getPoints", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Polygon", "fromLink": "Grafika/DrawingObject/Polygon.html", "link": "Grafika/DrawingObject/Polygon.html#method_getBorderSize", "name": "Grafika\\DrawingObject\\Polygon::getBorderSize", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Polygon", "fromLink": "Grafika/DrawingObject/Polygon.html", "link": "Grafika/DrawingObject/Polygon.html#method_getFillColor", "name": "Grafika\\DrawingObject\\Polygon::getFillColor", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Polygon", "fromLink": "Grafika/DrawingObject/Polygon.html", "link": "Grafika/DrawingObject/Polygon.html#method_getBorderColor", "name": "Grafika\\DrawingObject\\Polygon::getBorderColor", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\DrawingObject", "fromLink": "Grafika/DrawingObject.html", "link": "Grafika/DrawingObject/QuadraticBezier.html", "name": "Grafika\\DrawingObject\\QuadraticBezier", "doc": "&quot;Base class&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\DrawingObject\\QuadraticBezier", "fromLink": "Grafika/DrawingObject/QuadraticBezier.html", "link": "Grafika/DrawingObject/QuadraticBezier.html#method___construct", "name": "Grafika\\DrawingObject\\QuadraticBezier::__construct", "doc": "&quot;Creates a quadratic bezier. Quadratic bezier has 1 control point.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\QuadraticBezier", "fromLink": "Grafika/DrawingObject/QuadraticBezier.html", "link": "Grafika/DrawingObject/QuadraticBezier.html#method_getPoint1", "name": "Grafika\\DrawingObject\\QuadraticBezier::getPoint1", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\QuadraticBezier", "fromLink": "Grafika/DrawingObject/QuadraticBezier.html", "link": "Grafika/DrawingObject/QuadraticBezier.html#method_getControl", "name": "Grafika\\DrawingObject\\QuadraticBezier::getControl", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\QuadraticBezier", "fromLink": "Grafika/DrawingObject/QuadraticBezier.html", "link": "Grafika/DrawingObject/QuadraticBezier.html#method_getPoint2", "name": "Grafika\\DrawingObject\\QuadraticBezier::getPoint2", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\QuadraticBezier", "fromLink": "Grafika/DrawingObject/QuadraticBezier.html", "link": "Grafika/DrawingObject/QuadraticBezier.html#method_getColor", "name": "Grafika\\DrawingObject\\QuadraticBezier::getColor", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\DrawingObject", "fromLink": "Grafika/DrawingObject.html", "link": "Grafika/DrawingObject/Rectangle.html", "name": "Grafika\\DrawingObject\\Rectangle", "doc": "&quot;Base class&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\DrawingObject\\Rectangle", "fromLink": "Grafika/DrawingObject/Rectangle.html", "link": "Grafika/DrawingObject/Rectangle.html#method___construct", "name": "Grafika\\DrawingObject\\Rectangle::__construct", "doc": "&quot;Creates a rectangle.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Rectangle", "fromLink": "Grafika/DrawingObject/Rectangle.html", "link": "Grafika/DrawingObject/Rectangle.html#method_getWidth", "name": "Grafika\\DrawingObject\\Rectangle::getWidth", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Rectangle", "fromLink": "Grafika/DrawingObject/Rectangle.html", "link": "Grafika/DrawingObject/Rectangle.html#method_getHeight", "name": "Grafika\\DrawingObject\\Rectangle::getHeight", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Rectangle", "fromLink": "Grafika/DrawingObject/Rectangle.html", "link": "Grafika/DrawingObject/Rectangle.html#method_getPos", "name": "Grafika\\DrawingObject\\Rectangle::getPos", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Rectangle", "fromLink": "Grafika/DrawingObject/Rectangle.html", "link": "Grafika/DrawingObject/Rectangle.html#method_getBorderSize", "name": "Grafika\\DrawingObject\\Rectangle::getBorderSize", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Rectangle", "fromLink": "Grafika/DrawingObject/Rectangle.html", "link": "Grafika/DrawingObject/Rectangle.html#method_getFillColor", "name": "Grafika\\DrawingObject\\Rectangle::getFillColor", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\DrawingObject\\Rectangle", "fromLink": "Grafika/DrawingObject/Rectangle.html", "link": "Grafika/DrawingObject/Rectangle.html#method_getBorderColor", "name": "Grafika\\DrawingObject\\Rectangle::getBorderColor", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/EditorInterface.html", "name": "Grafika\\EditorInterface", "doc": "&quot;Interface EditorInterface&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_apply", "name": "Grafika\\EditorInterface::apply", "doc": "&quot;Apply a filter to the image. See Filters section for a list of available filters.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_blank", "name": "Grafika\\EditorInterface::blank", "doc": "&quot;Create a blank image given width and height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_compare", "name": "Grafika\\EditorInterface::compare", "doc": "&quot;Compare two images and returns a hamming distance. A value of 0 indicates a likely similar picture. A value between 1 and 10 is potentially a variation. A value greater than 10 is likely a different image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_crop", "name": "Grafika\\EditorInterface::crop", "doc": "&quot;Crop the image to the given dimension and position.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_draw", "name": "Grafika\\EditorInterface::draw", "doc": "&quot;Draw a DrawingObject on the image. See Drawing Objects section.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_equal", "name": "Grafika\\EditorInterface::equal", "doc": "&quot;Compare if two images are equal. It will compare if the two images are of the same width and height. If the dimensions differ, it will return false. If the dimensions are equal, it will loop through each pixels. If one of the pixel don&#039;t match, it will return false. The pixels are compared using their RGB (Red, Green, Blue) values.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_fill", "name": "Grafika\\EditorInterface::fill", "doc": "&quot;Fill entire image with color.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_free", "name": "Grafika\\EditorInterface::free", "doc": "&quot;Free the current image clearing resources associated with it.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_getImage", "name": "Grafika\\EditorInterface::getImage", "doc": "&quot;Get image instance.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_isAvailable", "name": "Grafika\\EditorInterface::isAvailable", "doc": "&quot;Checks the PHP install if the editor is available.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_opacity", "name": "Grafika\\EditorInterface::opacity", "doc": "&quot;Change the image opacity.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_open", "name": "Grafika\\EditorInterface::open", "doc": "&quot;Opens an image file for manipulation specified by $target.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_openImage", "name": "Grafika\\EditorInterface::openImage", "doc": "&quot;Open an image by passing an instance of Image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_openFile", "name": "Grafika\\EditorInterface::openFile", "doc": "&quot;Open an image by passing a file system path.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_overlay", "name": "Grafika\\EditorInterface::overlay", "doc": "&quot;Overlay an image on top of the current image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resize", "name": "Grafika\\EditorInterface::resize", "doc": "&quot;Wrapper function for the resizeXXX family of functions. Resize an image to a given width, height and mode.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resizeExact", "name": "Grafika\\EditorInterface::resizeExact", "doc": "&quot;Resize image to exact dimensions ignoring aspect ratio. Useful if you want to force exact width and height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resizeExactHeight", "name": "Grafika\\EditorInterface::resizeExactHeight", "doc": "&quot;Resize image to exact height. Width is auto calculated. Useful for creating row of images with the same height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resizeExactWidth", "name": "Grafika\\EditorInterface::resizeExactWidth", "doc": "&quot;Resize image to exact width. Height is auto calculated. Useful for creating column of images with the same width.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resizeFill", "name": "Grafika\\EditorInterface::resizeFill", "doc": "&quot;Resize image to fill all the space in the given dimension. Excess parts are cropped.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_resizeFit", "name": "Grafika\\EditorInterface::resizeFit", "doc": "&quot;Resize an image to fit within the given width and height. The re-sized image will not exceed the given dimension. Useful if you want to preserve the aspect ratio.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_rotate", "name": "Grafika\\EditorInterface::rotate", "doc": "&quot;Rotate an image counter-clockwise.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_save", "name": "Grafika\\EditorInterface::save", "doc": "&quot;Save the image to an image format.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_setImage", "name": "Grafika\\EditorInterface::setImage", "doc": "&quot;Set image instance.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\EditorInterface", "fromLink": "Grafika/EditorInterface.html", "link": "Grafika/EditorInterface.html#method_text", "name": "Grafika\\EditorInterface::text", "doc": "&quot;Write text to image.&quot;"},
            
            {"type": "Class", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/FilterInterface.html", "name": "Grafika\\FilterInterface", "doc": "&quot;Interface FilterInterface&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\FilterInterface", "fromLink": "Grafika/FilterInterface.html", "link": "Grafika/FilterInterface.html#method_apply", "name": "Grafika\\FilterInterface::apply", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\DrawingObject", "fromLink": "Grafika/Gd/DrawingObject.html", "link": "Grafika/Gd/DrawingObject/CubicBezier.html", "name": "Grafika\\Gd\\DrawingObject\\CubicBezier", "doc": "&quot;Class CubicBezier&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\DrawingObject\\CubicBezier", "fromLink": "Grafika/Gd/DrawingObject/CubicBezier.html", "link": "Grafika/Gd/DrawingObject/CubicBezier.html#method_draw", "name": "Grafika\\Gd\\DrawingObject\\CubicBezier::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\DrawingObject", "fromLink": "Grafika/Gd/DrawingObject.html", "link": "Grafika/Gd/DrawingObject/Ellipse.html", "name": "Grafika\\Gd\\DrawingObject\\Ellipse", "doc": "&quot;Class Ellipse&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\DrawingObject\\Ellipse", "fromLink": "Grafika/Gd/DrawingObject/Ellipse.html", "link": "Grafika/Gd/DrawingObject/Ellipse.html#method_draw", "name": "Grafika\\Gd\\DrawingObject\\Ellipse::draw", "doc": "&quot;TODO: Anti-aliased curves&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\DrawingObject", "fromLink": "Grafika/Gd/DrawingObject.html", "link": "Grafika/Gd/DrawingObject/Line.html", "name": "Grafika\\Gd\\DrawingObject\\Line", "doc": "&quot;Class Line&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\DrawingObject\\Line", "fromLink": "Grafika/Gd/DrawingObject/Line.html", "link": "Grafika/Gd/DrawingObject/Line.html#method_draw", "name": "Grafika\\Gd\\DrawingObject\\Line::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\DrawingObject", "fromLink": "Grafika/Gd/DrawingObject.html", "link": "Grafika/Gd/DrawingObject/Polygon.html", "name": "Grafika\\Gd\\DrawingObject\\Polygon", "doc": "&quot;Class Rectangle&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\DrawingObject\\Polygon", "fromLink": "Grafika/Gd/DrawingObject/Polygon.html", "link": "Grafika/Gd/DrawingObject/Polygon.html#method_draw", "name": "Grafika\\Gd\\DrawingObject\\Polygon::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\DrawingObject", "fromLink": "Grafika/Gd/DrawingObject.html", "link": "Grafika/Gd/DrawingObject/QuadraticBezier.html", "name": "Grafika\\Gd\\DrawingObject\\QuadraticBezier", "doc": "&quot;Class QuadraticBezier&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\DrawingObject\\QuadraticBezier", "fromLink": "Grafika/Gd/DrawingObject/QuadraticBezier.html", "link": "Grafika/Gd/DrawingObject/QuadraticBezier.html#method_draw", "name": "Grafika\\Gd\\DrawingObject\\QuadraticBezier::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\DrawingObject", "fromLink": "Grafika/Gd/DrawingObject.html", "link": "Grafika/Gd/DrawingObject/Rectangle.html", "name": "Grafika\\Gd\\DrawingObject\\Rectangle", "doc": "&quot;Class Rectangle&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\DrawingObject\\Rectangle", "fromLink": "Grafika/Gd/DrawingObject/Rectangle.html", "link": "Grafika/Gd/DrawingObject/Rectangle.html#method_draw", "name": "Grafika\\Gd\\DrawingObject\\Rectangle::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd", "fromLink": "Grafika/Gd.html", "link": "Grafika/Gd/Editor.html", "name": "Grafika\\Gd\\Editor", "doc": "&quot;GD Editor class. Uses the PHP GD library.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method___construct", "name": "Grafika\\Gd\\Editor::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_apply", "name": "Grafika\\Gd\\Editor::apply", "doc": "&quot;Apply a filter to the image. See Filters section for a list of available filters.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_blank", "name": "Grafika\\Gd\\Editor::blank", "doc": "&quot;Create a blank image given width and height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_compare", "name": "Grafika\\Gd\\Editor::compare", "doc": "&quot;Compare two images and returns a hamming distance. A value of 0 indicates a likely similar picture. A value between 1 and 10 is potentially a variation. A value greater than 10 is likely a different image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_crop", "name": "Grafika\\Gd\\Editor::crop", "doc": "&quot;Crop the image to the given dimension and position.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_draw", "name": "Grafika\\Gd\\Editor::draw", "doc": "&quot;Draw a DrawingObject on the image. See Drawing Objects section.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_equal", "name": "Grafika\\Gd\\Editor::equal", "doc": "&quot;Compare if two images are equal. It will compare if the two images are of the same width and height. If the dimensions differ, it will return false. If the dimensions are equal, it will loop through each pixels. If one of the pixel don&#039;t match, it will return false. The pixels are compared using their RGB (Red, Green, Blue) values.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_fill", "name": "Grafika\\Gd\\Editor::fill", "doc": "&quot;Fill entire image with color.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_free", "name": "Grafika\\Gd\\Editor::free", "doc": "&quot;Free the current image clearing resources associated with it.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_getImage", "name": "Grafika\\Gd\\Editor::getImage", "doc": "&quot;Get image instance.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_isAvailable", "name": "Grafika\\Gd\\Editor::isAvailable", "doc": "&quot;Checks if the editor is available on the current PHP install.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_opacity", "name": "Grafika\\Gd\\Editor::opacity", "doc": "&quot;Sets the image to the specified opacity level where 1.0 is fully opaque and 0.0 is fully transparent.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_open", "name": "Grafika\\Gd\\Editor::open", "doc": "&quot;Opens an image file for manipulation specified by $target.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_openImage", "name": "Grafika\\Gd\\Editor::openImage", "doc": "&quot;Open an image by passing an instance of Image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_openFile", "name": "Grafika\\Gd\\Editor::openFile", "doc": "&quot;Open an image by passing a file system path.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_overlay", "name": "Grafika\\Gd\\Editor::overlay", "doc": "&quot;Overlay an image on top of the current image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_resize", "name": "Grafika\\Gd\\Editor::resize", "doc": "&quot;Wrapper function for the resizeXXX family of functions. Resize image given width, height and mode.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_resizeExact", "name": "Grafika\\Gd\\Editor::resizeExact", "doc": "&quot;Resize image to exact dimensions ignoring aspect ratio. Useful if you want to force exact width and height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_resizeExactHeight", "name": "Grafika\\Gd\\Editor::resizeExactHeight", "doc": "&quot;Resize image to exact height. Width is auto calculated. Useful for creating row of images with the same height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_resizeExactWidth", "name": "Grafika\\Gd\\Editor::resizeExactWidth", "doc": "&quot;Resize image to exact width. Height is auto calculated. Useful for creating column of images with the same width.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_resizeFill", "name": "Grafika\\Gd\\Editor::resizeFill", "doc": "&quot;Resize image to fill all the space in the given dimension. Excess parts are cropped.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_resizeFit", "name": "Grafika\\Gd\\Editor::resizeFit", "doc": "&quot;Resize image to fit inside the given dimension. No part of the image is lost.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_rotate", "name": "Grafika\\Gd\\Editor::rotate", "doc": "&quot;Rotate an image counter-clockwise.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_save", "name": "Grafika\\Gd\\Editor::save", "doc": "&quot;Save the image to an image format.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_setImage", "name": "Grafika\\Gd\\Editor::setImage", "doc": "&quot;Set image instance.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_text", "name": "Grafika\\Gd\\Editor::text", "doc": "&quot;Write text to image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_histogram", "name": "Grafika\\Gd\\Editor::histogram", "doc": "&quot;Get histogram from an entire image or its sub-region of image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_entropy", "name": "Grafika\\Gd\\Editor::entropy", "doc": "&quot;Calculate entropy based on histogram.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Editor", "fromLink": "Grafika/Gd/Editor.html", "link": "Grafika/Gd/Editor.html#method_gdAlpha", "name": "Grafika\\Gd\\Editor::gdAlpha", "doc": "&quot;Convert alpha value of 0 - 1 to GD compatible alpha value of 0 - 127 where 0 is opaque and 127 is transparent&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\Filter", "fromLink": "Grafika/Gd/Filter.html", "link": "Grafika/Gd/Filter/Dither.html", "name": "Grafika\\Gd\\Filter\\Dither", "doc": "&quot;Dither image using Floyd-Steinberg algorithm. Dithering will reduce the color to black and white and add noise.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\Filter\\Dither", "fromLink": "Grafika/Gd/Filter/Dither.html", "link": "Grafika/Gd/Filter/Dither.html#method___construct", "name": "Grafika\\Gd\\Filter\\Dither::__construct", "doc": "&quot;Dither an image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Filter\\Dither", "fromLink": "Grafika/Gd/Filter/Dither.html", "link": "Grafika/Gd/Filter/Dither.html#method_apply", "name": "Grafika\\Gd\\Filter\\Dither::apply", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\Filter", "fromLink": "Grafika/Gd/Filter.html", "link": "Grafika/Gd/Filter/Grayscale.html", "name": "Grafika\\Gd\\Filter\\Grayscale", "doc": "&quot;Turn image into grayscale.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\Filter\\Grayscale", "fromLink": "Grafika/Gd/Filter/Grayscale.html", "link": "Grafika/Gd/Filter/Grayscale.html#method_apply", "name": "Grafika\\Gd\\Filter\\Grayscale::apply", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\Filter", "fromLink": "Grafika/Gd/Filter.html", "link": "Grafika/Gd/Filter/Sobel.html", "name": "Grafika\\Gd\\Filter\\Sobel", "doc": "&quot;Sobel filter is an edge detection filter.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\Filter\\Sobel", "fromLink": "Grafika/Gd/Filter/Sobel.html", "link": "Grafika/Gd/Filter/Sobel.html#method_apply", "name": "Grafika\\Gd\\Filter\\Sobel::apply", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd", "fromLink": "Grafika/Gd.html", "link": "Grafika/Gd/Image.html", "name": "Grafika\\Gd\\Image", "doc": "&quot;Immutable image class for GD.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method___construct", "name": "Grafika\\Gd\\Image::__construct", "doc": "&quot;Image constructor.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method___clone", "name": "Grafika\\Gd\\Image::__clone", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_createFromFile", "name": "Grafika\\Gd\\Image::createFromFile", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_createJpeg", "name": "Grafika\\Gd\\Image::createJpeg", "doc": "&quot;Load a JPEG image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_createPng", "name": "Grafika\\Gd\\Image::createPng", "doc": "&quot;Load a PNG image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_createGif", "name": "Grafika\\Gd\\Image::createGif", "doc": "&quot;Load a GIF image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_createWbmp", "name": "Grafika\\Gd\\Image::createWbmp", "doc": "&quot;Load a WBMP image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_createBlank", "name": "Grafika\\Gd\\Image::createBlank", "doc": "&quot;Create a blank image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_alphaBlendingMode", "name": "Grafika\\Gd\\Image::alphaBlendingMode", "doc": "&quot;Set the blending mode for an image. Allows transparent overlays on top of an image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_fullAlphaMode", "name": "Grafika\\Gd\\Image::fullAlphaMode", "doc": "&quot;Enable\/Disable transparency&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_getCore", "name": "Grafika\\Gd\\Image::getCore", "doc": "&quot;Get GD resource ID.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_getImageFile", "name": "Grafika\\Gd\\Image::getImageFile", "doc": "&quot;Get image file path.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_getWidth", "name": "Grafika\\Gd\\Image::getWidth", "doc": "&quot;Get image width in pixels.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_getHeight", "name": "Grafika\\Gd\\Image::getHeight", "doc": "&quot;Get image height in pixels.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Gd\\Image", "fromLink": "Grafika/Gd/Image.html", "link": "Grafika/Gd/Image.html#method_getType", "name": "Grafika\\Gd\\Image::getType", "doc": "&quot;Get image type.&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\ImageHash", "fromLink": "Grafika/Gd/ImageHash.html", "link": "Grafika/Gd/ImageHash/AverageHash.html", "name": "Grafika\\Gd\\ImageHash\\AverageHash", "doc": "&quot;AverageHash&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\ImageHash\\AverageHash", "fromLink": "Grafika/Gd/ImageHash/AverageHash.html", "link": "Grafika/Gd/ImageHash/AverageHash.html#method_hash", "name": "Grafika\\Gd\\ImageHash\\AverageHash::hash", "doc": "&quot;Generate and get the average hash of the image.&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Gd\\ImageHash", "fromLink": "Grafika/Gd/ImageHash.html", "link": "Grafika/Gd/ImageHash/DifferenceHash.html", "name": "Grafika\\Gd\\ImageHash\\DifferenceHash", "doc": "&quot;DifferenceHash&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Gd\\ImageHash\\DifferenceHash", "fromLink": "Grafika/Gd/ImageHash/DifferenceHash.html", "link": "Grafika/Gd/ImageHash/DifferenceHash.html#method_hash", "name": "Grafika\\Gd\\ImageHash\\DifferenceHash::hash", "doc": "&quot;Generate and get the difference hash of image.&quot;"},
            
            {"type": "Class", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/Grafika.html", "name": "Grafika\\Grafika", "doc": "&quot;Contains factory methods for detecting editors, creating editors and images.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Grafika", "fromLink": "Grafika/Grafika.html", "link": "Grafika/Grafika.html#method_fontsDir", "name": "Grafika\\Grafika::fontsDir", "doc": "&quot;Return path to directory containing fonts used in text operations.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Grafika", "fromLink": "Grafika/Grafika.html", "link": "Grafika/Grafika.html#method_setEditorList", "name": "Grafika\\Grafika::setEditorList", "doc": "&quot;Change the editor list order of evaluation globally.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Grafika", "fromLink": "Grafika/Grafika.html", "link": "Grafika/Grafika.html#method_detectAvailableEditor", "name": "Grafika\\Grafika::detectAvailableEditor", "doc": "&quot;Detects and return the name of the first supported editor which can either be \&quot;Imagick\&quot; or \&quot;Gd\&quot;.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Grafika", "fromLink": "Grafika/Grafika.html", "link": "Grafika/Grafika.html#method_createEditor", "name": "Grafika\\Grafika::createEditor", "doc": "&quot;Creates the first available editor.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Grafika", "fromLink": "Grafika/Grafika.html", "link": "Grafika/Grafika.html#method_createImage", "name": "Grafika\\Grafika::createImage", "doc": "&quot;Create an image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Grafika", "fromLink": "Grafika/Grafika.html", "link": "Grafika/Grafika.html#method_createBlankImage", "name": "Grafika\\Grafika::createBlankImage", "doc": "&quot;Create a blank image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Grafika", "fromLink": "Grafika/Grafika.html", "link": "Grafika/Grafika.html#method_createFilter", "name": "Grafika\\Grafika::createFilter", "doc": "&quot;Create a filter. Detects available editor to use.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Grafika", "fromLink": "Grafika/Grafika.html", "link": "Grafika/Grafika.html#method_createDrawingObject", "name": "Grafika\\Grafika::createDrawingObject", "doc": "&quot;Draws an object. Detects available editor to use.&quot;"},
            
            {"type": "Class", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/ImageInterface.html", "name": "Grafika\\ImageInterface", "doc": "&quot;Interface ImageInterface&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_createFromFile", "name": "Grafika\\ImageInterface::createFromFile", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_createBlank", "name": "Grafika\\ImageInterface::createBlank", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_getCore", "name": "Grafika\\ImageInterface::getCore", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_getImageFile", "name": "Grafika\\ImageInterface::getImageFile", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_getWidth", "name": "Grafika\\ImageInterface::getWidth", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_getHeight", "name": "Grafika\\ImageInterface::getHeight", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\ImageInterface", "fromLink": "Grafika/ImageInterface.html", "link": "Grafika/ImageInterface.html#method_getType", "name": "Grafika\\ImageInterface::getType", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika", "fromLink": "Grafika.html", "link": "Grafika/ImageType.html", "name": "Grafika\\ImageType", "doc": "&quot;Class ImageType. Represent the different image types for GD and Imagick consistently.&quot;"},
                    
            {"type": "Class", "fromName": "Grafika\\Imagick\\DrawingObject", "fromLink": "Grafika/Imagick/DrawingObject.html", "link": "Grafika/Imagick/DrawingObject/CubicBezier.html", "name": "Grafika\\Imagick\\DrawingObject\\CubicBezier", "doc": "&quot;Class CubicBezier&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\DrawingObject\\CubicBezier", "fromLink": "Grafika/Imagick/DrawingObject/CubicBezier.html", "link": "Grafika/Imagick/DrawingObject/CubicBezier.html#method_draw", "name": "Grafika\\Imagick\\DrawingObject\\CubicBezier::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick\\DrawingObject", "fromLink": "Grafika/Imagick/DrawingObject.html", "link": "Grafika/Imagick/DrawingObject/Ellipse.html", "name": "Grafika\\Imagick\\DrawingObject\\Ellipse", "doc": "&quot;Class Ellipse&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\DrawingObject\\Ellipse", "fromLink": "Grafika/Imagick/DrawingObject/Ellipse.html", "link": "Grafika/Imagick/DrawingObject/Ellipse.html#method_draw", "name": "Grafika\\Imagick\\DrawingObject\\Ellipse::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick\\DrawingObject", "fromLink": "Grafika/Imagick/DrawingObject.html", "link": "Grafika/Imagick/DrawingObject/Line.html", "name": "Grafika\\Imagick\\DrawingObject\\Line", "doc": "&quot;Class Line&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\DrawingObject\\Line", "fromLink": "Grafika/Imagick/DrawingObject/Line.html", "link": "Grafika/Imagick/DrawingObject/Line.html#method_draw", "name": "Grafika\\Imagick\\DrawingObject\\Line::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick\\DrawingObject", "fromLink": "Grafika/Imagick/DrawingObject.html", "link": "Grafika/Imagick/DrawingObject/Polygon.html", "name": "Grafika\\Imagick\\DrawingObject\\Polygon", "doc": "&quot;Class Polygon&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\DrawingObject\\Polygon", "fromLink": "Grafika/Imagick/DrawingObject/Polygon.html", "link": "Grafika/Imagick/DrawingObject/Polygon.html#method_draw", "name": "Grafika\\Imagick\\DrawingObject\\Polygon::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick\\DrawingObject", "fromLink": "Grafika/Imagick/DrawingObject.html", "link": "Grafika/Imagick/DrawingObject/QuadraticBezier.html", "name": "Grafika\\Imagick\\DrawingObject\\QuadraticBezier", "doc": "&quot;Class QuadraticBezier&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\DrawingObject\\QuadraticBezier", "fromLink": "Grafika/Imagick/DrawingObject/QuadraticBezier.html", "link": "Grafika/Imagick/DrawingObject/QuadraticBezier.html#method_draw", "name": "Grafika\\Imagick\\DrawingObject\\QuadraticBezier::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick\\DrawingObject", "fromLink": "Grafika/Imagick/DrawingObject.html", "link": "Grafika/Imagick/DrawingObject/Rectangle.html", "name": "Grafika\\Imagick\\DrawingObject\\Rectangle", "doc": "&quot;Class Rectangle&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\DrawingObject\\Rectangle", "fromLink": "Grafika/Imagick/DrawingObject/Rectangle.html", "link": "Grafika/Imagick/DrawingObject/Rectangle.html#method_draw", "name": "Grafika\\Imagick\\DrawingObject\\Rectangle::draw", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick", "fromLink": "Grafika/Imagick.html", "link": "Grafika/Imagick/Editor.html", "name": "Grafika\\Imagick\\Editor", "doc": "&quot;Imagick Editor class. Uses the PHP Imagick library.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method___construct", "name": "Grafika\\Imagick\\Editor::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_apply", "name": "Grafika\\Imagick\\Editor::apply", "doc": "&quot;Apply a filter to the image. See Filters section for a list of available filters.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_blank", "name": "Grafika\\Imagick\\Editor::blank", "doc": "&quot;Create a blank image given width and height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_compare", "name": "Grafika\\Imagick\\Editor::compare", "doc": "&quot;Compare two images and returns a hamming distance. A value of 0 indicates a likely similar picture. A value between 1 and 10 is potentially a variation. A value greater than 10 is likely a different image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_crop", "name": "Grafika\\Imagick\\Editor::crop", "doc": "&quot;Crop the image to the given dimension and position.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_draw", "name": "Grafika\\Imagick\\Editor::draw", "doc": "&quot;Draw a DrawingObject on the image. See Drawing Objects section.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_equal", "name": "Grafika\\Imagick\\Editor::equal", "doc": "&quot;Compare if two images are equal. It will compare if the two images are of the same width and height. If the dimensions differ, it will return false. If the dimensions are equal, it will loop through each pixels. If one of the pixel don&#039;t match, it will return false. The pixels are compared using their RGB (Red, Green, Blue) values.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_fill", "name": "Grafika\\Imagick\\Editor::fill", "doc": "&quot;Fill entire image with color.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_free", "name": "Grafika\\Imagick\\Editor::free", "doc": "&quot;Free the current image clearing resources associated with it.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_getImage", "name": "Grafika\\Imagick\\Editor::getImage", "doc": "&quot;Get image instance.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_isAvailable", "name": "Grafika\\Imagick\\Editor::isAvailable", "doc": "&quot;Checks if the editor is available on the current PHP install.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_opacity", "name": "Grafika\\Imagick\\Editor::opacity", "doc": "&quot;Sets the image to the specified opacity level where 1.0 is fully opaque and 0.0 is fully transparent.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_open", "name": "Grafika\\Imagick\\Editor::open", "doc": "&quot;Opens an image file for manipulation specified by $target.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_openImage", "name": "Grafika\\Imagick\\Editor::openImage", "doc": "&quot;Open an image by passing an instance of Image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_openFile", "name": "Grafika\\Imagick\\Editor::openFile", "doc": "&quot;Open an image by passing a file system path.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_overlay", "name": "Grafika\\Imagick\\Editor::overlay", "doc": "&quot;Overlay an image on top of the current image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_resize", "name": "Grafika\\Imagick\\Editor::resize", "doc": "&quot;Wrapper function for the resizeXXX family of functions. Resize image given width, height and mode.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_resizeExact", "name": "Grafika\\Imagick\\Editor::resizeExact", "doc": "&quot;Resize image to exact dimensions ignoring aspect ratio. Useful if you want to force exact width and height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_resizeExactHeight", "name": "Grafika\\Imagick\\Editor::resizeExactHeight", "doc": "&quot;Resize image to exact height. Width is auto calculated. Useful for creating row of images with the same height.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_resizeExactWidth", "name": "Grafika\\Imagick\\Editor::resizeExactWidth", "doc": "&quot;Resize image to exact width. Height is auto calculated. Useful for creating column of images with the same width.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_resizeFill", "name": "Grafika\\Imagick\\Editor::resizeFill", "doc": "&quot;Resize image to fill all the space in the given dimension. Excess parts are cropped.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_resizeFit", "name": "Grafika\\Imagick\\Editor::resizeFit", "doc": "&quot;Resize image to fit inside the given dimension. No part of the image is lost.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_rotate", "name": "Grafika\\Imagick\\Editor::rotate", "doc": "&quot;Rotate an image counter-clockwise.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_save", "name": "Grafika\\Imagick\\Editor::save", "doc": "&quot;Save the image to an image format.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_setImage", "name": "Grafika\\Imagick\\Editor::setImage", "doc": "&quot;Set image instance.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_text", "name": "Grafika\\Imagick\\Editor::text", "doc": "&quot;Write text to image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_histogram", "name": "Grafika\\Imagick\\Editor::histogram", "doc": "&quot;Get histogram from an entire image or its sub-region of image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Editor", "fromLink": "Grafika/Imagick/Editor.html", "link": "Grafika/Imagick/Editor.html#method_entropy", "name": "Grafika\\Imagick\\Editor::entropy", "doc": "&quot;Calculate entropy based on histogram.&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick\\Filter", "fromLink": "Grafika/Imagick/Filter.html", "link": "Grafika/Imagick/Filter/Dither.html", "name": "Grafika\\Imagick\\Filter\\Dither", "doc": "&quot;Dither image using Floyd-Steinberg algorithm. Dithering will turn the image black and white and add noise.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\Filter\\Dither", "fromLink": "Grafika/Imagick/Filter/Dither.html", "link": "Grafika/Imagick/Filter/Dither.html#method_apply", "name": "Grafika\\Imagick\\Filter\\Dither::apply", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick\\Filter", "fromLink": "Grafika/Imagick/Filter.html", "link": "Grafika/Imagick/Filter/Grayscale.html", "name": "Grafika\\Imagick\\Filter\\Grayscale", "doc": "&quot;Turn image into grayscale.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\Filter\\Grayscale", "fromLink": "Grafika/Imagick/Filter/Grayscale.html", "link": "Grafika/Imagick/Filter/Grayscale.html#method_apply", "name": "Grafika\\Imagick\\Filter\\Grayscale::apply", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick\\Filter", "fromLink": "Grafika/Imagick/Filter.html", "link": "Grafika/Imagick/Filter/Sobel.html", "name": "Grafika\\Imagick\\Filter\\Sobel", "doc": "&quot;Sobel filter is an edge detection filter.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\Filter\\Sobel", "fromLink": "Grafika/Imagick/Filter/Sobel.html", "link": "Grafika/Imagick/Filter/Sobel.html#method_apply", "name": "Grafika\\Imagick\\Filter\\Sobel::apply", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick", "fromLink": "Grafika/Imagick.html", "link": "Grafika/Imagick/Image.html", "name": "Grafika\\Imagick\\Image", "doc": "&quot;Immutable image class for Imagick.&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\Image", "fromLink": "Grafika/Imagick/Image.html", "link": "Grafika/Imagick/Image.html#method___construct", "name": "Grafika\\Imagick\\Image::__construct", "doc": "&quot;Image constructor.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Image", "fromLink": "Grafika/Imagick/Image.html", "link": "Grafika/Imagick/Image.html#method___clone", "name": "Grafika\\Imagick\\Image::__clone", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Image", "fromLink": "Grafika/Imagick/Image.html", "link": "Grafika/Imagick/Image.html#method_createFromFile", "name": "Grafika\\Imagick\\Image::createFromFile", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Image", "fromLink": "Grafika/Imagick/Image.html", "link": "Grafika/Imagick/Image.html#method_createBlank", "name": "Grafika\\Imagick\\Image::createBlank", "doc": "&quot;Create a blank image.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Image", "fromLink": "Grafika/Imagick/Image.html", "link": "Grafika/Imagick/Image.html#method_getCore", "name": "Grafika\\Imagick\\Image::getCore", "doc": "&quot;Get Imagick instance&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Image", "fromLink": "Grafika/Imagick/Image.html", "link": "Grafika/Imagick/Image.html#method_getImageFile", "name": "Grafika\\Imagick\\Image::getImageFile", "doc": "&quot;Get image file path.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Image", "fromLink": "Grafika/Imagick/Image.html", "link": "Grafika/Imagick/Image.html#method_getWidth", "name": "Grafika\\Imagick\\Image::getWidth", "doc": "&quot;Get image width in pixels.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Image", "fromLink": "Grafika/Imagick/Image.html", "link": "Grafika/Imagick/Image.html#method_getHeight", "name": "Grafika\\Imagick\\Image::getHeight", "doc": "&quot;Get image height in pixels.&quot;"},
                    {"type": "Method", "fromName": "Grafika\\Imagick\\Image", "fromLink": "Grafika/Imagick/Image.html", "link": "Grafika/Imagick/Image.html#method_getType", "name": "Grafika\\Imagick\\Image::getType", "doc": "&quot;Get image type.&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick\\ImageHash", "fromLink": "Grafika/Imagick/ImageHash.html", "link": "Grafika/Imagick/ImageHash/AverageHash.html", "name": "Grafika\\Imagick\\ImageHash\\AverageHash", "doc": "&quot;AverageHash&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\ImageHash\\AverageHash", "fromLink": "Grafika/Imagick/ImageHash/AverageHash.html", "link": "Grafika/Imagick/ImageHash/AverageHash.html#method_hash", "name": "Grafika\\Imagick\\ImageHash\\AverageHash::hash", "doc": "&quot;Generate and get the average hash of the image.&quot;"},
            
            {"type": "Class", "fromName": "Grafika\\Imagick\\ImageHash", "fromLink": "Grafika/Imagick/ImageHash.html", "link": "Grafika/Imagick/ImageHash/DifferenceHash.html", "name": "Grafika\\Imagick\\ImageHash\\DifferenceHash", "doc": "&quot;DifferenceHash&quot;"},
                                                        {"type": "Method", "fromName": "Grafika\\Imagick\\ImageHash\\DifferenceHash", "fromLink": "Grafika/Imagick/ImageHash/DifferenceHash.html", "link": "Grafika/Imagick/ImageHash/DifferenceHash.html#method_hash", "name": "Grafika\\Imagick\\ImageHash\\DifferenceHash::hash", "doc": "&quot;Generate and get the difference hash of image.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


