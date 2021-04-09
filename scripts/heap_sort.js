function HeapSort()
{
  disable();
    delay=0;

    heap_sort();

    enable();
}

function swap(i,j)
{
    update(divs[i],div_sizes[i],"red");//Color update
    update(divs[j],div_sizes[j],"red");//Color update

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    update(divs[i],div_sizes[i],"red");//Height update
    updateNo(divs[i],div_sizes[i]);
    update(divs[j],div_sizes[j],"red");//Height update
    updateNo(divs[j],div_sizes[j]);
    update(divs[i],div_sizes[i],"blue");//Color update
    update(divs[j],div_sizes[j],"blue");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!=i)
        {
            update(divs[largest],div_sizes[largest],"blue");//Color update
        }

        largest=l;

        update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!=i)
        {
            update(divs[largest],div_sizes[largest],"blue");//Color update
        }

        largest=r;

        update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        update(divs[i],div_sizes[i],"green");//Color update
        update(divs[i],div_sizes[i],"yellow");//Color update

        max_heapify(i,0);

        update(divs[i],div_sizes[i],"blue");//Color update
        update(divs[i],div_sizes[i],"linear-gradient(to right, #7868e6 0%, #000000 100%)");//Color update
    }
    update(divs[i],div_sizes[i],"linear-gradient(to right, #7868e6 0%, #000000 100%)");//Color update
}
